<!DOCTYPE html>
<html lang="en">

<?php $pageTitle = "About";
require_once "header.php"; ?>

<body class="flex flex-col h-screen">
    <div class="flex-grow flex justify-center items-center">
        <div class="w-8/12 lg:w-1/3 md:w-1/2 sm:w-8/12 h-full flex items-center">
            <div class="border p-4 w-full mb-12 bg-white/[0.9]">
                <div class="flex justify-between">
                    <p class="text-4xl mb-4 underline decoration-orange-600 decoration-wavy">
                        About
                    </p>
                    <a href="../../public/index.php" class="block text-center border hover:bg-white size-10 py-2"> <- </a>
                </div>
                <p class="mb-2">
                    Cyber Heroes is a social responsibility is a course project assignment. Its aim is to explain information security to people (especially children) and to instill internet culture.
                </p>
            </div>
        </div>
    </div>

    <?php require_once "footer.php"; ?>
</body>

</html>