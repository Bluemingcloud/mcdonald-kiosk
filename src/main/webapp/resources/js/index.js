let homeBox, nav0, nav1, nav2, nav3;
let wrap0, wrap1, wrap2;
let sec_single, sec_set;

let btn00, btn01, btn02, btn03, btn04, btn05,
    btn06, btn07, btn08, btn09, btn10, btn11;

let num00, num01, num02, num03, num04, num05,
    num06, num07, num08, num09, num10, num11;

let btn_order, btn_cancel;

/* 
위 코드의 단점은 다음과 같습니다:

    변수명의 일관성: 변수명이 일관성이 없습니다. 
homeBox, nav0, wrap0와 같은 변수명과 btn00, num00와 같은 변수명 
사이에 일관성이 없습니다. 이러한 일관성 부족은 코드를 이해하고 유지보수하기 
어렵게 만듭니다. 변수명을 좀 더 의미 있는 이름으로 지정하는 것이 좋습니다.

    불필요한 변수: 코드에는 필요하지 않은 변수들이 많습니다. 
예를 들어, nav3 변수는 코드에서 사용되지 않고 있습니다. 
이러한 불필요한 변수는 코드를 혼동시키고 메모리를 낭비할 수 있습니다.

    중복 선언: 변수들이 각각 한 줄에 하나씩 선언되어 있지 않고, 
여러 개의 변수가 한 줄에 선언되어 있습니다. 
이는 코드를 읽기 어렵게 만들고 실수를 유발할 수 있습니다.

    의미 없는 변수들: btn00, btn01, num00, num01와 같은 변수들은 
의미가 불분명합니다. 이러한 변수명은 코드의 가독성을 저해합니다. 
변수명은 해당 변수가 하는 일을 명확하게 설명해야 합니다.

    코드 재사용성: 많은 변수들이 각각 하나의 요소를 가리키고 있습니다. 
이러한 패턴은 코드를 반복하고 재사용성을 감소시킵니다. 
대신에 배열이나 객체를 사용하여 변수들을 관리하는 것이 더 좋을 수 있습니다.

    의미 있는 자료구조 부재: 변수들이 동일한 목적을 가지고 있지만, 
이를 하나의 자료구조로 표현하지 않고 여러 개의 변수로 나누어 사용하고 있습니다. 
이는 코드의 유지보수성을 저해할 수 있습니다.

좀 더 의미 있는 변수명을 선택하고, 필요한 변수들만 선언하고, 
변수들을 더 의미 있는 자료구조로 구성하여 코드를 개선할 필요가 있습니다.
*/

window.onload=function() {
    homeBox=document.getElementById("homeBox");
    nav0=document.getElementById("nav0");
    nav1=document.getElementById("nav1");
    nav2=document.getElementById("nav2");

    wrap0=document.querySelector(".wrap0");
    wrap1=document.querySelector(".wrap1");
    wrap2=document.querySelector(".wrap2");

    sec_single=document.querySelector(".sec_single");
    sec_set=document.querySelector(".sec_set");

    homeBox.addEventListener("click", function() {
        wrap0.style.display="block";
        wrap1.style.display="none";
        wrap2.style.display="none";

        sec_single.style.display="none";
        sec_set.style.display="none";

        sumMenu="";
        sumPrice=0;
        totalMenu.innerHTML="";
        totalPrice.innerHTML="가격 : 0 원";
    });
    nav0.addEventListener("click", function() {
        wrap0.style.display="none";
        wrap1.style.display="block";
        wrap2.style.display="none";

        sec_single.style.display="block";
        sec_set.style.display="none";

        console.log("단품");
    });
    nav1.addEventListener("click", function() {
        wrap0.style.display="none";
        wrap1.style.display="block";
        wrap2.style.display="none";

        sec_single.style.display="none";
        sec_set.style.display="block";

        console.log("세트");
    });

    /*
    위 코드의 단점은 다음과 같습니다:

        반복 코드: 각각의 이벤트 리스너 콜백 함수에서는 
    매우 유사한 작업을 수행하고 있습니다. 
    홈 화면을 보여주는 부분을 제외하고는 대부분의 코드가 중복됩니다. 
    이는 코드의 가독성을 저하시키고 유지 보수를 어렵게 만듭니다.

        구조의 불일치: nav0, nav1, nav2와 같은 변수들은 
    각각의 네비게이션 버튼을 나타내고 있지만, 
    wrap0, wrap1, wrap2와 같은 변수들은 각각의 랩 요소를 나타내고 있습니다. 
    이러한 변수들의 명명 방식의 불일치는 코드의 가독성을 저하시키고 
    실수를 유발할 수 있습니다.
    
        의존성 문제: 이 코드는 HTML 구조가 변경되면 작동하지 않을 수 있습니다. 
    예를 들어, 네비게이션 버튼의 숫자나 랩 요소의 클래스가 변경되면 
    JavaScript 코드도 변경되어야 합니다. 이는 유지 보수를 어렵게 만듭니다.

    이러한 단점을 해결하기 위해서는 코드를 리팩토링하여 
    중복 코드를 제거하고, 의존성을 줄이는 등의 작업이 필요합니다. 
    이를 통해 코드의 가독성을 향상시키고 유지 보수성을 높일 수 있습니다. 
    */

    const btnA = document.querySelectorAll(".btn");
    // console.log(btnA);

    const totalMenu=document.getElementById("totalMenu")
    let sumPrice=0;
    const totalPrice=document.getElementById("totalPrice");
    let sumMenu="";    

    for( let i=0; i<btnA.length; i++) {
        const btn_select = btnA[i];
        const price = parseInt(btn_select.getAttribute("data-price"));
        const menu = btn_select.getAttribute("data-menu");

        btn_select.addEventListener("click", () => {
            if (sumMenu === "") {
                sumMenu = menu;
            } else {
                sumMenu += ", "+menu;
            }
            totalMenu.innerHTML=sumMenu;
            // console.log(sumMenu);

            sumPrice += price;
            totalPrice.innerHTML="가격 : "+sumPrice+" 원";
            // console.log(sumPrice);
            
        });
    }

    btn_order=document.getElementById("btn_order");
    btn_cancel=document.getElementById("btn_cancel");

    btn_order.addEventListener("click", function() {
        wrap0.style.display="none";
        wrap1.style.display="none";
        wrap2.style.display="block";
    });
    
    btn_cancel.addEventListener("click", function() {
        sumMenu="";
        sumPrice=0;
        totalMenu.innerHTML="";
        totalPrice.innerHTML="가격 : 0 원";
    });
}