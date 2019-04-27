function ajax(method, url, data, cb) {
  // 1. XMLHttpRequest 생성
  const xhr = new XMLHttpRequest();

  // 2. 아래 4번에서 요청한 Request를 받을 Response 이벤트 (onreadystatechange)
  xhr.onreadystatechange = function() { 
    if (this.readyState === 4 && this.status === 200) {
      cb(this.responseText);
    }
  };

  // 3. XHR Object Open 
  xhr.open(method, url); // 리퀘스트할 method 와 url 설정
  xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

  // 4. 세팅 완료한 XHR 오브젝트 Request 요청
  xhr.send(JSON.stringify(data));
}

// 1. GET 요청
ajax('get', 'http://localhost:8080/getData', null, function(data) {
  console.log(data);
  document.querySelector('#getResult').textContent += data.toString();
});

// 2. POST 요청
ajax('post', 'http://localhost:8080/addData', { name: 'HongGilDong' }, function(data) {
  console.log(data);
  document.querySelector('#postResult').textContent += data.toString();
});

// 참고자료
// XMLHttpRequest Send: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send
// Usage
// xhr.open({method}, {url})
// Example
// xhr.open('get', '/getData')