<?php
header("Access-Control-Allow-Origin: *");
// Check connect
try {
    $dbh = new PDO("mysql:host=localhost;dbname=000761144", "root", "");
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $ex) {
    die("Error: Connecting to database. {$ex->getMessage()}");
}

function createView($requestRender)
{
    $dbh = new PDO("mysql:host=localhost;dbname=000761144", "root", "");
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "SELECT * FROM `book list`";
    $sql .= "ORDER BY `" . str_replace("`", "``", $requestRender) . "`";
    $commandView = $dbh->prepare($sql);
    $commandView->execute();

    $id = [];
    $bookTitle = [];
    $author = [];
    $publicationDate = [];
    $genre = [];
    $summary = [];

    $collectionOfBooks = [];
    while ($row = $commandView->fetch()) {
        array_push($id, $row['ID']);
        array_push($bookTitle, $row['Book Title']);
        array_push($author, $row['Author']);
        array_push($publicationDate, $row['Publication Date']);
        array_push($genre, $row['Genre']);
        array_push($summary, $row['Summary']);
    }

    for ($i = 0; $i < count($id); $i++) {
        $collectionOfBooks[$i] = [

            'id' => $id[$i],
            'bookTitle'  => $bookTitle[$i],
            'author' => $author[$i],
            'publicationDate' => $publicationDate[$i],
            'genre' => $genre[$i],
            'summary' => $summary[$i]
        ];
    }

    echo json_encode($collectionOfBooks);
}



//Set Render page
if (isset($_POST['requestRender'])) {
    $requestRender = $_POST['requestRender'];
    createView($requestRender);
}

// Set Delete Page
if (isset($_POST['requestDelete'])) {
    $requestDelete = $_POST['requestDelete'];
    $sql = "DELETE FROM `book list` WHERE `ID`=?";
    $commandView = $dbh->prepare($sql);
    $commandView->execute([$requestDelete]);
}
if (isset($_GET['id'])) {

    $requestList = $_GET['id'];

    $sql = "UPDATE `Book List` 
           SET `Book Title`=?, `Author`=?, `Publication Date`=?, `Genre`=?, `Summary`=? WHERE `ID`=?";
    $commandView = $dbh->prepare($sql);
    $commandView->execute([$_GET['bookTitle'],$_GET['author'],$_GET['publicationDate'],$_GET['genre'],$_GET['summary'],$_GET['id']]);
    echo $_GET['id'];
}

//Set 

// SQL


// Output
