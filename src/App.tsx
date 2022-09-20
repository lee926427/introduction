import { useEffect, ReactNode } from 'react';
import { SideBar, TimeLine } from './components';
import { Card, Flowbite } from 'flowbite-react';

type TimeLineItemProps = {
  date: string;
  title: string;
  body: () => ReactNode;
};

function App() {
  const portfolios: TimeLineItemProps[] = [
    {
      date: '2022/2~仍在進行',
      title: 'E-thing2.0應用程式',
      body: () => (
        <div>
          <h4 className="font-bold">
            技術:<span className="ml-2">Tauri / vite / React / Typescript / Tailwindcss</span>
          </h4>
          <div className="mt-4">
            描述:
            <ul>
              <li>1. 解決 dashboard 固定排版問題</li>
              <li>2. 將功能 widget 化，可調整位置以及縮放大小</li>
              <li>3. 可彈性選擇 widget 加入至 dashboard</li>
              <li>4. 用 Tauri 將網頁包裝成二進制文件，提高安全性</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      date: '2021/6~2022/2',
      title: '台中市府照明系統',
      body: () => (
        <div>
          <h4 className="font-bold">
            技術:<span className="ml-2">Tauri / vite / React / Typescript / Tailwindcss</span>
          </h4>
          <div className="mt-4">
            描述:
            <ul>
              <li>1. 遠端監管燈光設備</li>
              <li>2. 可定時開關燈光</li>
              <li>3. 圖像化照明設備位置</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      date: '2020/8~2021/6',
      title: '空氣品質稽查App',
      body: () => (
        <div>
          <h4 className="font-bold">
            技術:<span className="ml-2">Tauri / vite / React / Typescript / Tailwindcss</span>
          </h4>
          <div className="mt-4">
            描述:
            <ul>
              <li>1. 解決稽查人員搜尋汙染源時無法判斷方向</li>
              <li>2. 在google map 上長按找查附近空氣汙染點</li>
              <li>3. 透過 heat map 檢視感測點一周的概況</li>
              <li>4. 及時上傳回報現場狀況並建立檔案</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    document.body.classList.add('dark');
  }, []);
  return (
    <Flowbite>
      <div className="App h-screen flex flex-row relative">
        <SideBar />
        <div className="ml-72 w-full pr-10 pt-4 flex flex-col gap-y-4">
          <Card id="aboutMe">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              About me
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              有三年以上的前端經歷，主要用 Vue3 與 React 進行 RWD 網站製作，並選用 Vite
              加速進行專案建構時間，用 alias 設定讀取檔案的絕對路徑
              積極參與前端社群活動，在社群的讀書會中與社群成員進行交流，並擔任負責主題的講者，過程中透過
              code review 協助成員調整、最佳化程式碼邏輯 能獨自從無到有開發應用程式
              ，目前正朝向前端工程師持續學習，
              積極學習新技術並了解其中帶來的好處與同事互相交流，期望累積多點專業能力再朝後端前進
            </p>
          </Card>

          <Card id="skills">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Skills
            </h5>
            <div className="w-full flex gap-x-4">
              <div className="font-normal text-gray-700 dark:text-gray-400 inline flex-1">
                <h6 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  React
                </h6>
                <ul>
                  <li>了解 useState、createContext、useRef 等等 hooks</li>
                  <li>使用 custom hook 增加邏輯重複利用性</li>
                  <li>利用 render props 傳遞 component 至 children</li>
                </ul>
              </div>
              <div className="font-normal text-gray-700 dark:text-gray-400 flex-1">
                <h6 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  React-Native
                </h6>
                <ul>
                  <li>使用 Flipper 檢查除錯</li>
                  <li>使用 Redux 跨頁面共享資料</li>
                  <li>使用 React Navigation 開發應用程式導航</li>
                </ul>
              </div>
              <div className="font-normal text-gray-700 dark:text-gray-400 flex-1">
                <h6 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  JavaScript
                </h6>
                <ul>
                  <li>使用 ES6+ 開發</li>
                  <li>使用過 TypeScript 進行開發</li>
                  <li>使用過 Funcitonal Programming</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card id="portfolios">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Portfolios
            </h5>
            <TimeLine items={portfolios} />
          </Card>
        </div>
      </div>
    </Flowbite>
  );
}

export default App;
