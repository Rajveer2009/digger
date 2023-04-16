var dosbox = new Dosbox({
    id: "dosbox",
    onload: function (dosbox) {
        dosbox.run("https://cors.archive.org/cors/msdos_Digger_1983_1983/Digger_1983_1983.zip", "/Digger83/./digger.com");
    }
});