<?php
include "../db/functions.php";
$questions = GetQuestions();
$groupedQuestions = [];

foreach ($questions as $row) {
    $q_id = $row['q_id'];
    if (!isset($groupedQuestions[$q_id])) {
        $groupedQuestions[$q_id] = [
            'question' => $row['q_question'],
            'answers' => [],
            'correct_answer_id' => $row['q_correct_answer_id'],
            'point' => (int) $row['q_point']
        ];
    }
    $groupedQuestions[$q_id]['answers'][] = [
        'id' => $row['a_id'],
        'text' => $row['a_answer']
    ];
}

?>

<!DOCTYPE html>
<html lang="en">

<?php $pageTitle = "Quiz";
require_once "header.php"; ?>
<header class="border-b border-zinc-200 text-center p-4 bg-white/[0.9]">
    <a href="../../public/index.php" class="grinched text-blue-500 text-3xl">Cyber Heroes</a>
</header>

<body class="flex flex-col h-screen">
    <div class="flex-grow flex justify-center items-center">
        <div class="w-8/12 lg:w-1/3 md:w-1/2 sm:w-8/12 h-full flex items-center">
            <div id="quiz-container" class="border-2 rounded-lg border-blue-400 p-4 w-full mb-12 bg-white/[0.9]">
            </div>
        </div>
    </div>

    <script>
        const questions = <?php echo json_encode(array_values($groupedQuestions)); ?>;
    </script>
    <script src="../../public/js/quiz.js"></script>

    <?php require_once "footer.php"; ?>
</body>

</html>