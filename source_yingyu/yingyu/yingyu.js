main();

function main() {
    // 处理“真题解析”链接地址
    let title = document.getElementById("param_title").innerHTML;
    let pdfURL = window.location.protocol + "//" + window.location.host + "/yingyu/" + title + "/" + title + "-analysis.pdf";
    document.getElementById("analysis").setAttribute("href", "../pdfjs/web/viewer.html?file=" + pdfURL);
    let pdfURL2 = window.location.protocol + "//" + window.location.host + "/yingyu/" + title + "/" + title + "-analysis2.pdf";
    document.getElementById("analysis2").setAttribute("href", "../pdfjs/web/viewer.html?file=" + pdfURL2);

    // 处理下划线
    let uArr = document.getElementsByTagName("u");
    for (let i = 0; i < uArr.length; i++) {
        if (uArr[i].className != "nospace") {
            uArr[i].innerHTML = "&emsp;" + uArr[i].innerHTML + "&emsp;";
        }
    }

    // 处理段落首行缩进
    let detailsArr = document.getElementsByTagName("details");
    for (let i = 0; i < detailsArr.length; i++) {
        let summary = detailsArr[i].getElementsByTagName("summary")[0];
        summary.innerHTML = "&emsp;&emsp;" + summary.innerHTML;

        let divArr = detailsArr[i].getElementsByTagName("div");
        for (let j = 0; j < divArr.length; j++) {
            if (divArr[j].className == "text") {
                divArr[j].innerHTML = "&emsp;&emsp;" + divArr[j].innerHTML;
            }
        }
    }
}