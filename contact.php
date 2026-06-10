<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Récupération et nettoyage des données (Protection contre les injections)
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST["message"]));
    $rgpd = isset($_POST["rgpd"]) ? true : false;

    // 2. Vérification HONEYPOT (Robot)
    if (!empty($_POST["website"])) {
        // Au lieu d'afficher une erreur explicite, on simule un succès pour le robot
        header("Location: index.html?status=success#contact");
        exit;
    }

    // 3. Vérification de la validité des champs requis (Humain)
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL) || !$rgpd) {
        header("Location: index.html?status=error");
        exit;
    }

    // 4. ENREGISTREMENT DANS LE FICHIER DE PROSPECTS (CSV)
    // Placé ici, il ne s'exécute QUE si c'est un humain et que les données sont valides
    $csv_file = 'assets/prospects.csv'; 
    $file_exists = file_exists($csv_file);
    $file_handle = fopen($csv_file, 'a'); 
    
    if ($file_handle) {
        // UTF-8 BOM pour la bonne lecture des accents sous Excel
        if (!$file_exists) {
            fprintf($file_handle, chr(0xEF).chr(0xBB).chr(0xBF));
            fputcsv($file_handle, ['Date', 'Nom', 'Email', 'Message'], ';');
        }
        
        $current_date = date('Y-m-d H:i:s');
        fputcsv($file_handle, [$current_date, $name, $email, $message], ';');
        fclose($file_handle);
    }

    // 5. Configuration de l'e-mail
    $recipient = "volny@moget.online";
    $subject = "Contact via Portfolio : $name";
    
    $email_content = "Nom : $name\n";
    $email_content .= "Email : $email\n\n";
    $email_content .= "Message :\n$message\n";

    $email_headers = "From: Formulaire Portfolio <webmaster@moget.online>\r\n";
    $email_headers .= "Reply-To: $email\r\n";
    $email_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // 6. Envoi de l'e-mail et redirections finales
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        header("Location: index.html?status=success#contact");
        exit;
    } else {
        header("Location: index.html?status=server_error#contact");
        exit;
    }

} else {
    // Blocage si accès direct au fichier PHP sans POST
    header("Location: index.html");
    exit; // Important pour stopper immédiatement le script ici
}
?>