# embsys_sevid
El Proyecto de Diseño de Ingeniería en Computadores consiste en la verificación de documentos de identidad costarricense utilizando la placa Raspberry Pi Zero como sistema embebido. Este sistema consta de módulos de captura de imágenes, procesamiento de imágenes y validación de datos. El objetivo principal del proyecto es desarrollar un sistema automatizado y de bajo costo que pueda verificar la autenticidad de los documentos de identidad emitidos por el gobierno de Costa Rica.

El módulo de captura de imágenes utiliza una cámara integrada en la Raspberry Pi Zero para capturar imágenes de los documentos de identidad. El módulo de procesamiento de imágenes utiliza una API de Google Cloud para extraer información relevante, como el número de identificación y el nombre del titular. El módulo de validación de datos compara la información extraída del documento escaneado con una base de datos de documentos proporcionada por el TSE. 

El modo de uso del sistema es mediante una aplicación web, donde el usuario puede cargar la imagen del documento de identidad y/o fotografiar el documento de identidad y así recibir una respuesta en tiempo real sobre la autenticidad del mismo. El sistema mostrará en pantalla si el documento escaneado coincide o no con ninguno de los documentos auténticos almacenados en la base de datos.

Este proyecto es importante porque ayudará a prevenir el fraude y la falsificación de documentos de identidad, lo que es esencial para garantizar la seguridad y la integridad de los procesos gubernamentales y comerciales.

# Pasos de configuración
1. Asegúrese de tener instalado Python en su sistema. Luego, ejecute el siguiente comando para instalar las dependencias del proyecto.
    
    `pip3 install -r requirements.txt`

2. Descargue el archivo de información de electores desde [aquí](https://www.tse.go.cr/descarga_padron.htm). Luego, coloque el archivo descargado en la carpeta llamada resources con el nombre padron.txt.

3. Coloque la imagen del documento de identidad en la carpeta resources y nómbrela imagen.jpg.

4. Abra una terminal y ejecute el siguiente comando.

    `python3 main.py`

