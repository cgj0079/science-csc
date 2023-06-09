// 댓글 목록을 저장할 배열
let comments = [];

// 댓글 등록 버튼을 클릭하면 실행되는 함수
function submitComment() {
    // 입력된 댓글 내용과 작성자 이름 가져오기
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;

    // 만약 name이 공백이거나 비어있다면 알림창을 띄움
    if (name.trim() === "") {
        alert("Nickname을 입력해주세요.")
        return;
    }

    // 만약 comment가 공백이거나 비어있다면 알림창을 띄움
    if (comment.trim() === "") {
        alert("변경을 요구하는 사항을 입력해주세요.")
        return;
    }

    // 댓글 목록에 추가하기
    comments.push({ name, comment });

    // 입력 폼 초기화하기
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";

    // 댓글 목록 업데이트하기
    updateCommentList();
}

// 댓글 목록을 업데이트하는 함수
function updateCommentList() {
    const commentList = document.getElementById("comment-list").querySelector("ul");

    // 댓글 목록 초기화하기
    commentList.innerHTML = "";

    // 댓글 목록 추가하기
    comments.forEach(comment => {
        const li = document.createElement("li");
        li.innerText = `${comment.name}: ${comment.comment}`;
        commentList.appendChild(li);
    });
}

window.onload = function () {
    // 페이지 로드 시 댓글 목록 업데이트하기
    updateCommentList();
}
