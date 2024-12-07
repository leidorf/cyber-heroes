<!DOCTYPE html>
<html lang="en">

<?php $pageTitle = "Contact";
require_once "header.php"; ?>

<body class="flex flex-col h-screen">
    <div class="flex-grow flex justify-center items-center">
        <div class="w-8/12 lg:w-1/3 md:w-1/2 sm:w-8/12 h-full flex items-center">
            <div class="border-2 rounded-lg border-purple-500 p-4 w-full mb-12 bg-white/[0.9]">
                <div class="flex justify-between">
                    <p class="text-4xl mb-4 underline decoration-purple-500 text-purple-500 grinched decoration-wavy">
                        Contact
                    </p>
                    <a href="/" class="block text-center size-10 py-2">←</a>
                </div>
                <p class="mb-2">
                    You can contact the developer (leidorf) via <a href="mailto:leidorf.foss@gmail.com" class="underline decoration-2 hover:decoration-2 decoration-amber-400 hover:decoration-amber-200 cursor-pointer">email</a>, <a href="https://github.com/leidorf" target="_blank" class="underline decoration-2 hover:decoration-2 decoration-violet-500 hover:decoration-violet-300 cursor-pointer">GitHub</a> and <a href="https://discord.com/users/297103270260768769" target="_blank" class="underline decoration-2 hover:decoration-2 decoration-indigo-500 hover:decoration-indigo-300 cursor-pointer">Discord</a>.
                </p>
            </div>
        </div>
    </div>

    <?php require_once "footer.php"; ?>
</body>

</html>