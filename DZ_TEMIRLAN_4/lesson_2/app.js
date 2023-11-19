const GetError = new XMLHttpRequest();

GetError.open("GET", "data.json", true);

GetError.onload = function () {
    if (GetError.status >= 400) {
        console.error("Произошла ошибка при загрузке. Статус:", GetError.status);
    } else {
        try {
            const data = JSON.parse(GetError.responseText);
            console.log(data);
        } catch (error) {
            console.error("Ошибка при разборе JSON:", error);
        }
    }
};

GetError.onerror = function () {
    console.error("Произошла ошибка при запросе");
};

GetError.send();
