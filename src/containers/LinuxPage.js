import React, { PureComponent } from 'react';
import { Head, Code } from '../components/shared';

class LinuxPage extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Head>Linux</Head>
        <p>
          <Code className="mr">rm -rf directory_name</Code> - удалить папку и все что в ней<br/>
          <Code className="mr">cat /home/user/file</Code> - вывести содержимое файла<br/>
          <Code className="mr">rm -Rf /home/user/dir</Code> - удалить директорию и все файлы внутри неё<br/>
          <Code className="mr">rm /home/user/file</Code> - удалить файл<br/>
        </p>
      </div>
    );
  }
}

export default LinuxPage;