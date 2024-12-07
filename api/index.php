<!DOCTYPE html>
<html lang="en">
<?php require_once "../src/pages/header.php"; ?>

<body class="flex flex-col h-screen bg-white">
    <div class="flex flex-grow justify-center items-center">
        <div class="w-full max-w-lg text-center">
            <div class="border-2 rounded-lg border-blue-400 grinched p-6 bg-white/[0.8] shadow-lg">
                <div class="mb-8">
                    <span class="text-5xl lg:text-6xl text-blue-500 ">
                        Cyber Heroes
                    </span>
                </div>
                <div class="grid gap-4 text-2xl">
                    <a href="../src/pages/quiz.php" class="hover:border-opacity-80 hover:scale-105 transition-all block border-2 rounded-lg border-yellow-400 text-yellow-400 hover:bg-white px-4 py-2">
                        Quiz
                    </a>
                    <a href="../src/pages/about.php" class="hover:border-opacity-80 hover:scale-105 transition-all block border-2 rounded-lg border-green-500 text-green-500 hover:bg-white px-4 py-2">
                        About
                    </a>
                    <a href="../src/pages/contact.php" class="hover:border-opacity-80 hover:scale-105 transition-all block border-2 rounded-lg border-purple-500 text-purple-500 hover:bg-white px-4 py-2">
                        Contact
                    </a>
                </div>
            </div>
        </div>
    </div>

    <?php require_once "../src/pages/footer.php"; ?>
</body>

</html>