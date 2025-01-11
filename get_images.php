<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json');

// Directorio donde se almacenarán las imágenes
$imageDirectory = 'images';

// Formatos de imagen permitidos
$allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

// Función para obtener todas las imágenes
function getImages($dir, $allowedExtensions) {
    $images = [];
    $fullPath = __DIR__ . DIRECTORY_SEPARATOR . $dir;
    
    // Verificar si el directorio existe
    if (!is_dir($fullPath)) {
        mkdir($fullPath, 0755, true);
        return [
            'error' => 'Directory created, no images yet',
            'path' => $fullPath
        ];
    }

    // Escanear el directorio
    $files = scandir($fullPath);
    
    foreach ($files as $file) {
        // Ignorar . y ..
        if ($file === '.' || $file === '..') continue;
        
        // Obtener la extensión del archivo
        $extension = strtolower(pathinfo($file, PATHINFO_EXTENSION));
        
        // Verificar si es una imagen válida
        if (in_array($extension, $allowedExtensions)) {
            // Codificar el nombre del archivo para la URL
            $encodedFilename = rawurlencode($file);
            
            $images[] = [
                'filename' => $file,
                'path' => $dir . '/' . $encodedFilename,
                'type' => $extension
            ];
        }
    }
    
    if (empty($images)) {
        return [
            'error' => 'No images found',
            'scanned_directory' => $fullPath,
            'files_found' => $files
        ];
    }
    
    return $images;
}

// Obtener y devolver las imágenes como JSON
$images = getImages($imageDirectory, $allowedExtensions);
echo json_encode($images);
?>