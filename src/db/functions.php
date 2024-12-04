<?php
include "db.php";

function htmlclean($text)
{
    $text = preg_replace("'<script[^>]*>.*?</script>'si", '', $text);
    $text = preg_replace('/<a\s+.*?href="([^"]+)"[^>]*>([^<]+)<\/a>/is', '\2 (\1)', $text);
    $text = preg_replace('/<!--.+?-->/', '', $text);
    $text = preg_replace('/{.+?}/', '', $text);
    $text = preg_replace('/&nbsp;/', ' ', $text);
    $text = preg_replace('/&amp;/', ' ', $text);
    $text = preg_replace('/&quot;/', ' ', $text);
    $text = strip_tags($text);
    $text = htmlspecialchars($text);
    return $text;
}
function GetQuestions()
{
    global $pdo;
    $query = "SELECT 
        questions.id as q_id,
        questions.title as q_title,
        questions.question as q_question,
        questions.correct_answer_id as q_correct_answer_id,
        questions.point as q_point,
        answers.id as a_id,
        answers.question_id as a_q_id,
        answers.answer as a_answer 
        FROM questions 
        LEFT JOIN answers ON questions.id = answers.question_id";
    $statement = $pdo->prepare($query);
    $statement->execute();
    $result = $statement->fetchAll();
    return $result;
}


function CheckAnswer($question_id, $answer_id)
{
    global $pdo;
    $question_id = htmlclean($question_id);
    $answer_id = htmlclean($answer_id);
    $query = "SELECT point FROM questions WHERE id = :question_id AND correct_answer_id = :answer_id";
    $statement = $pdo->prepare($query);
    $statement->execute(["question_id" => $question_id, "answer_id" => $answer_id]);
    $result = $statement->fetchAll();
    return $result;
}
