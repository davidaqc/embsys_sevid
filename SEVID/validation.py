import os

def validar_datos():

    """
    Validación de los datos del documento de identidad con los datos del archivo de padrón.
    """

    if not os.path.exists('text-out/text-out.txt'):
        return False

    # Leer los datos del archivo text-outout.txt
    with open('text-out/text-out.txt', 'r') as archi_file:
        archi_data = archi_file.readlines()

    #  Verifica si una línea de texto contiene únicamente caracteres numéricos o espacios en blanco
    def contiene_solo_numeros_y_espacios(linea):
        return all(caracter.isdigit() or caracter.isspace() for caracter in linea)

    # Obtener el número de cédula
    cedula = None
    for linea in archi_data:
        if contiene_solo_numeros_y_espacios(linea):
            cedula = linea[:-1]
            break

    # Obtener el nombre
    nombre = None
    for linea in archi_data:
        if 'Nombre:' in linea:
            nombre = linea.split(':')[1].strip()  # Obtener el valor después de "Nombre:"
            break

    # Obtener el primer apellido
    apellido1 = None
    for linea in archi_data:
        if '1° Apellido:' in linea:
            apellido1 = linea.split(':')[1].strip()  # Obtener el valor después de "1° Apellido:"
            break

    # Obtener el segundo apellido
    apellido2 = None
    for linea in archi_data:
        if '2° Apellido:' in linea:
            apellido2 = linea.split(':')[1].strip()  # Obtener el valor después de "2° Apellido:"
            break

    # Imprimir los datos obtenidos
    print('Número de Cédula: ', cedula)
    print('Nombre: ', nombre)
    print('Primer Apellido: ', apellido1)
    print('Segundo Apellido: ', apellido2)

    # Verifica si una cadena representa una cédula de identidad de Costa Rica.
    def es_cedula_cr(cadena):

        # Verificar longitud de la cadena
        if len(cadena) != 11:
            return False
        
        # Verificar que el primer caracter sean dígito
        if not cadena[:1].isdigit():
            return False
        
        # Verificar que el segundo caracter sea un espacio en blanco
        if cadena[1] != " ":
            return False
        
        # Verificar que los siguientes cuatro caracteres sean dígitos
        if not cadena[2:6].isdigit():
            return False
        
        # Verificar que el septimo caracter sea un espacio en blanco
        if cadena[6] != " ":
            return False
        
        # Verificar que los últimos cuatro caracteres sean dígitos
        if not cadena[7:].isdigit():
            return False
        
        # Si todas las validaciones pasan, es una cédula de identidad válida
        return True

    if es_cedula_cr(cedula):
        cedula_cr = "Sí. La cadena representa una cédula de identidad de Costa Rica."
        print("Sí. La cadena representa una cédula de identidad de Costa Rica.")
    else:
        cedula_cr = "No. La cadena NO representa una cédula de identidad de Costa Rica."
        print("No. La cadena NO representa una cédula de identidad de Costa Rica.")

    # Datos personales
    datos_personales = [cedula.replace(" ", ""), nombre, apellido1, apellido2]

    # Nombre del archivo de texto
    archivo_padron = "resources/padron.txt"

    # Abrir el archivo de texto en modo lectura
    with open(archivo_padron, "r") as archivo:
        # Leer el archivo línea por línea
        for linea in archivo:
            # Dividir la línea en campos separados por comas
            campos = linea.strip().split(",")
            
            # Obtener los valores relevantes de la línea
            cedula = campos[0]
            nombre = campos[5].strip()
            apellido1 = campos[6].strip()
            apellido2 = campos[7].strip()
            
            # Verificar si los datos personales están presentes en la línea
            #if cedula == datos_personales[0] and nombre == datos_personales[1] and apellido1 == datos_personales[2] and apellido2 == datos_personales[3]:
            if cedula == datos_personales[0]:
                datosPersonalesPresentes = "Sí. Los datos personales están presentes en el archivo."
                print("Sí. Los datos personales están presentes en el archivo.")
                break
        else:
            datosPersonalesPresentes = "No. Los datos personales NO están presentes en el archivo."
            nombre = "---"
            apellido1 = "---"
            apellido2 = "---"
            cedula = "---"
            print("No. Los datos personales NO están presentes en el archivo.")
    
    return [nombre, apellido1, apellido2, cedula, datosPersonalesPresentes]
