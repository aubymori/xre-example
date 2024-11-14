function SetToolbarMode(mode)
{
    let toolbar = document.getElementById("example-toolbar");
    toolbar.setAttribute("mode", mode);
}

function ToggleDarkMode()
{
    if (document.documentElement.style.colorScheme == "light")
        document.documentElement.style.colorScheme = "dark";
    else
        document.documentElement.style.colorScheme = "light";
}