import React, { PureComponent } from 'react';
import { Head, SubHead, Code } from '../components/shared';
import Statistic from '../components/statistic';

class WisebitsPage extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div>
        <Head>Work</Head>
        <SubHead>Fucking controllers</SubHead>
        <Statistic />

        <SubHead>Run backend</SubHead>
        <p>
          <Code>Run VPN</Code><br/>
          <Code>python2.7 ./manage.py runserver 0.0.0.0:3003</Code>
        </p>

        <SubHead>Run local server in any folder</SubHead>
        <p>
          <Code>python -m SimpleHTTPServer 8000</Code>
        </p>

        <SubHead>Advertisers / DSP Statistic</SubHead>
        <p>
          Ограничить число записей в файле adnetwork/rtb/views/<b>get_statistics.py</b><br/>
          <Code>data = model.range(start, end).group_by(*get_grouped_types(type))<b>.limit(20)</b></Code>
        </p>

        <SubHead>Hasan 1.0</SubHead>
        <p>
          <Code>/wisebits/local/</Code> - по этому пути лежит проект. Один бэкэнд сразу и на трафикстарс и на рунатив.<br />
          <Code>./cmd/swiss start</Code> - для запуска выполнить эту команду в папке local<br />
          <Code>./cmd/swiss rebuild admin</Code> <Code>./cmd/swiss rebuild admin-runative</Code><br />
          <Code>docker-compose logs -f admin</Code><br />
        </p>
        <p>
          Если нужно прогнать миграции - стягиваем с мастера /local/src/GOPATH/..../api<br/>
          Потом запускаем:<br/>
          <Code>./cmd/swiss migrate</Code>
        </p>
        <p>
          <Code>admin.service.consul:8080</Code> и <Code>admin-runative.service.consul:9090</Code>
        </p>
        <p>
          <Code>docker-compose restart admin-runative</Code>
        </p>
      </div>
    );
  }
}

export default WisebitsPage;