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
        </p>
      </div>
    );
  }
}

export default LinuxPage;