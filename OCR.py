#!/usr/bin/env python

# This file contains code adapted from the cloud vision library provided by Google LLC.
# Copyright 2017 Google LLC.

# [Brief description of changes made]

# Copyright 2023 Gerald Valverde Mc kenzie
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import io
import os  

from google.cloud import vision
from PIL import Image, ImageDraw

from FeatureType import FeatureType

# Credentials of connection with Google Cloud
credential_path = "credentials.json"
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = credential_path

class OCR:
    def __init__(self):
        self.ImgOut = None
         
    """Draw a border around the image using the hints in the vector list."""
    def draw_boxes(self, image, bounds, color):

        draw = ImageDraw.Draw(image)

        for bound in bounds:
            draw.polygon(
                [
                    bound.vertices[0].x,
                    bound.vertices[0].y,
                    bound.vertices[1].x,
                    bound.vertices[1].y,
                    bound.vertices[2].x,
                    bound.vertices[2].y,
                    bound.vertices[3].x,
                    bound.vertices[3].y,
                ],
                None,
                color,
            )
        return image


    # [START vision_document_text_tutorial_detect_bounds]
    def get_document_bounds(self, image_file, feature):
        """Returns document bounds given an image."""
        client = vision.ImageAnnotatorClient()

        bounds = []

        with io.open(image_file, "rb") as image_file:
            content = image_file.read()

        image = vision.Image(content=content)
        #image_context = vision.types.ImageContext(language_hints=['es'])
        response = client.document_text_detection(image=image)
        document = response.full_text_annotation
        texts = response.text_annotations

        texts = response.text_annotations
        # Collect specified feature bounds by enumerating all document features
        for page in document.pages:
            for block in page.blocks:
                for paragraph in block.paragraphs:
                    for word in paragraph.words:
                        for symbol in word.symbols:
                            if feature == FeatureType.SYMBOL:
                                bounds.append(symbol.bounding_box)

                        if feature == FeatureType.WORD:
                            bounds.append(word.bounding_box)

                    if feature == FeatureType.PARA:
                        bounds.append(paragraph.bounding_box)

                if feature == FeatureType.BLOCK:
                    bounds.append(block.bounding_box)

        # The list `bounds` contains the coordinates of the bounding boxes.
        return bounds, texts
    # [END vision_document_text_tutorial_detect_bounds]


    def save_text(self,text, fileout):
        # Guardar el texto detectado en un archivo de texto
        with open(fileout, 'w') as f:
            for temp in text:
                f.write(temp.description)
    
    def save_text_list(self,text):
        result = []
        for temp in text:
            result.append(temp.description)
        return result


    def process(self,filein, fileout):
        image = Image.open(filein)
        bounds = self.get_document_bounds(filein, FeatureType.BLOCK)
        self.draw_boxes(image, bounds[0], "blue")
        bounds = self.get_document_bounds(filein, FeatureType.PARA)
        self.draw_boxes(image, bounds[0], "red")
        bounds,text = self.get_document_bounds(filein, FeatureType.WORD)
        self.draw_boxes(image, bounds, "yellow")
        return image, text
    
    def recognizeText(self, image):
        filename= "temp.jpg"
        image.save(filename)
        bounds = self.get_document_bounds(filename, FeatureType.BLOCK)
        self.draw_boxes(image, bounds[0], "blue")
        bounds = self.get_document_bounds(filename, FeatureType.PARA)
        self.draw_boxes(image, bounds[0], "red")
        bounds,text = self.get_document_bounds(filename, FeatureType.WORD)
        self.draw_boxes(image, bounds, "yellow")
        return image, text

