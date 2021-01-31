<?
    if(
        isset($_POST["name"]) && $_POST["name"] != "" &&
        isset($_POST["phone"]) && $_POST["phone"] != "" &&
        isset($_POST["email"]) && $_POST["email"] != "" &&
        isset($_POST["service"]) && $_POST["service"] != "" &&
        isset($_POST["message"]) && $_POST["message"] != ""
    ){
        // definisco mittente e destinatario della mail
        $nome_mittente = $_POST["name"];
        $mail_mittente = $_POST["email"];
        $mail_destinatario = "francesco.digiusto@gmail.com";

        // definisco il subject ed il body della mail
        $mail_oggetto = "Richiesta di contatto";
        $mail_corpo = "Nuova richiesta informazioni da parte di: " . $_POST["name"] . "\r\n";
        $mail_corpo .= "Contatto telefonico: " . $_POST["phone"] . "\r\n";
        $mail_corpo .= "Contatto email: " . $_POST["email"] . "\r\n";
        $mail_corpo .= "Tipoligia di servizio: " . $_POST["service"] . "\r\n\r\n";
        $mail_corpo .= $_POST["message"];

        // aggiusto un po' le intestazioni della mail
        // E' in questa sezione che deve essere definito il mittente (From)
        // ed altri eventuali valori come Cc, Bcc, ReplyTo e X-Mailer
        $mail_headers = "From: " .  $nome_mittente . " <" .  $mail_mittente . ">\r\n";
        $mail_headers .= "Reply-To: " .  $mail_mittente . "\r\n";
        $mail_headers .= "X-Mailer: PHP/" . phpversion();

        if (mail($mail_destinatario, $mail_oggetto, $mail_corpo, $mail_headers))
            echo "Messaggio inviato con successo a " . $mail_destinatario;
        else
            echo "Errore. Nessun messaggio inviato.";
    }
?>