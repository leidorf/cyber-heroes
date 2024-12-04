<!DOCTYPE html>
<html lang="en">
<?php require_once "../src/pages/header.php"; ?>

<body class="flex flex-col h-screen">
    <div class="flex-grow flex justify-center items-center">
        <div class="w-8/12 lg:w-1/3 md:w-1/2 sm:w-8/12 h-full text-center">
            <div class="w-full mt-36">
                <img src="images/logo.png" class="size-36" />
                <div class="border p-4 bg-white/[0.9]">
                    <div class="mb-8">
                        <span class="text-4xl">
                            Cyber Heroes
                        </span>
                    </div>
                    <div class="grid justify-items-center font-bold">
                        <a href="../src/pages/quiz.php" class="block border hover:bg-white w-24 lg:w-56 md:w-36 sm:w-24 px-4 py-2 mb-4">Quiz</a>
                        <a href="../src/pages/about.php" class="block border hover:bg-white w-24 lg:w-56 md:w-36 sm:w-24 px-4 py-2 mb-4">About</a>
                        <a href="../src/pages/contact.php" class="block border hover:bg-white w-24 lg:w-56 md:w-36 sm:w-24 px-4 py-2 mb-4">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <?php require_once "../src/pages/footer.php"; ?>
</body>

</html>