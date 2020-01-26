import React, { PureComponent } from 'react';
import { Head, Code } from '../components/shared';

class GitPage extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Head>GIT</Head>
        <p>
          <Code className="mr">git cherry-pick</Code> - забрать комиты из одной ветки в другую<br/>
          <Code className="mr">git cherry-pick 3ea6207fe84</Code> - взять комит с индентификатором <b>3ea6207fe84</b> из той
          ветки, в которой он был сделан, и изменения этого коммита будут вставлены в текущую ветку как новый коммит<br/>
          <Code className="mr">git branch -d <b>имя_ветки</b></Code> - удалить ветку из локального Git-репозитория<br/>
          <Code className="mr">git push origin --delete <b>имя_ветки</b></Code> - удалить ветку из удаленного Git-репозитория<br/>
        </p>
        <p>
          <Code className="mr">git update-index --assume-unchanged path/to/file.txt</Code> - перестать отслеживать файл (он не попадет больше в git status)<br/>
          <Code className="mr">git update-index --no-assume-unchanged path/to/file.txt</Code> - начать опять отслеживать изменения в файле<br/>
        </p>
      </div>
    );
  }
}

export default GitPage;