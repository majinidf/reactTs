//import { useState } from 'react'
//import './assets/css/publishFiles.module.css';
import './assets/css/publishFiles.css';

// types/status.ts
export type StatusType =
  | 'Planned'
  | 'In Progress'
  | 'QA'
  | 'Blocked'
  | 'Done';

export interface FILE_ITEM {
  id: number;
  title: string;
  level: number;
  url?: string;
  status: StatusType;
  completedDate?: string;
  lastUpdate?: string;
  note?: string;
}
export interface FILE_LIST_TYPE {
  category: string;
  list: FILE_ITEM[];
}

//import { FILE_LIST_TYPE } from '../types/status';

export const FILE_LIST_DATA: FILE_LIST_TYPE[] = [
  {
    category: 'Common',
    list: [
      {
        id: 1,
        title: 'Home',
        level: 1,
        url: '/index.html',
        status: 'Done',
        completedDate: '2025-12-10',
        lastUpdate: '2025-12-15',
        note: ''
      },
      {
        id: 2,
        title: 'Products',
        level: 1,
        url: '/products/index.html',
        status: 'In Progress',
        lastUpdate: '2025-12-15',
        note: 'PC 마크업 완료'
      },
      {
        id: 3,
        title: 'Detail',
        level: 2,
        url: '/products/detail.html',
        status: 'QA',
        lastUpdate: '2025-12-15',
        note: '접근성 점검 필요'
      },
      {
        id: 4,
        title: 'Review Write',
        level: 3,
        url: '/products/detail/review/write.html',
        status: 'Blocked',
        lastUpdate: '2025-12-14',
        note: 'API 미확정'
      }
    ],
  },
  {
    category: 'Home',
    list: [
      {
        id: 1,
        title: 'Home',
        level: 1,
        url: '/index.html',
        status: 'Done',
        completedDate: '2025-12-10',
        lastUpdate: '2025-12-15',
        note: ''
      },
      {
        id: 2,
        title: 'Products',
        level: 1,
        url: '/products/index.html',
        status: 'In Progress',
        lastUpdate: '2025-12-15',
        note: 'PC 마크업 완료'
      },
      {
        id: 3,
        title: 'Detail',
        level: 2,
        url: '/products/detail.html',
        status: 'QA',
        lastUpdate: '2025-12-15',
        note: '접근성 점검 필요'
      },
      {
        id: 4,
        title: 'Review Write',
        level: 3,
        url: '/products/detail/review/write.html',
        status: 'Blocked',
        lastUpdate: '2025-12-14',
        note: 'API 미확정'
      }
    ],
  }
];

// components/StatusTable.tsx
//import { FILE_LIST_TYPE } from '../types/status';
//import { statusData } from '../data/statusData';
//import './status.css';

const STATUS_COLOR: Record<StatusType, string> = {
  Planned: 'is-planned',
  'In Progress': 'is-inProgress',
  QA: 'is-qa',
  Blocked: 'is-blocked',
  Done: 'is-done'
};

// export default function StatusTable() {
//function StatusTable() {
const PublishFiles = () => {

  /* const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(prev => !prev);
  }; */

  return (
    <div className="publishFiles-container">
      <h1>Publish Files</h1>

      {FILE_LIST_DATA.map(cate => (
        <section className="publishFiles-wrapper">
          <h2 className="publishFiles-title">
            {cate.category}
          </h2>

          <table className="publishFiles-table">
            <thead>
              <tr>
                <th>Title</th>
                {/* <th>Level</th> */}
                <th>URL</th>
                <th>Status</th>
                <th>Completed Date</th>
                <th>Last Update</th>
                <th>Note</th>
              </tr>
            </thead>

            <tbody>
              {cate.list.map(item => (
                <tr key={item.id} data-status={item.status}>
                  <td
                    className={`title level_${item.level}`}
                    style={{ paddingLeft: `${(item.level - 1) * 24}px` }}
                  >
                    {item.title}
                  </td>
                  {/* <td>{item.level}</td> */}
                  <td>
                    <a href={item.url} target="_blank" rel="noreferrer">
                      {item.url}
                    </a>
                  </td>
                  <td className={STATUS_COLOR[item.status]}>
                    {item.status}
                  </td>
                  <td>{item.completedDate ?? '-'}</td>
                  <td>{item.lastUpdate}</td>
                  <td>{item.note ?? '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </section>
      ))}
      
    </div>
  );
}

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <PublishFiles />
    </>
  )
}

export default App
