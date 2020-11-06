import React, { useLayoutEffect } from 'react';
import { Head, SubHead } from '../components/shared';
import Code from '../components/Code';

const WebworkersPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>WEB WORKERS</Head>
      <SubHead></SubHead>
      <p>
        Web worker являются «средством для веб-контента запускать сценарии в 
        фоновых потоках»
      </p>
<Code>
{`if (typeof(Worker) !== "undefined") {  
  worker = new Worker("worker.js");
}`}
</Code>
      <p>
        Есть два потока: window и worker. Нужно как-то научить их обмениваться данными. Для этого мы используем
        функцию postMessage в файле <b>worker.js</b> - для отправки сообщений в основной поток браузера и&ensp;
        <b>listener</b> слушатель <b>worker.onmessage</b> в главном потоке для получения сообщений от worker.
      </p>
      <p>
        Мы также можем отправлять сообщения из основного потока браузера в поток worker - единственное отличие тут 
        в том что мы вызываем <b>worker.postMessage()</b> в главном потоке, а <b>onmessage</b> в потоке worker.
      </p>
      <p>
        Мы можем использовать метод <p>terminate()</p>, чтобы завершить выполнение worker
      </p>
<p>Файл <b>index.html</b> (внутри тега script)</p>
<Code>
{`var worker;

function testWorker() {
  if (typeof(Worker) !== "undefined") {
    if (typeof(worker) == "undefined") {
      worker = new Worker("worker.js");
    }
    worker.onmessage = function(event) {
      document.getElementById("workerOutput").innerHTML = event.data;
    };
  } else {
    document.getElementById("workerOutput").innerHTML = "Web Workers are not supported in your browser";
  }
}

function terminateWorker() { 
  worker.terminate();
  worker = undefined;
}

function testMainThread() {
  for (var i = 0; i < 200000; i++) { 
    document.getElementById("mainThreadOutput").innerHTML = "Main Thread Counter: " + i;
  }
}
`}
</Code>
<p>Файл <b>worker.js</b></p>
<Code>
{`i = 0;
while (i < 200000) {
  postMessage("Web Worker Counter: " + i);
  i++;
}
`}
</Code>
      <p>
        Теперь мы можем видеть, что рабочий поток не блокирует интерактивность 
        основного процесса браузера, а циклический вывод 200 000 номеров не 
        влияет на основной поток. Числа в элементе #workerOutput обновляются 
        на каждой итерации.
      </p>
    </>
  )
};

export default WebworkersPage;