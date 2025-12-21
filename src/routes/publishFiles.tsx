import { Link } from 'react-router-dom';

export type StatusType = 
  | 'Planned'
  | 'In Progress'
  | 'QA'
  | 'Blocked'
  | 'Done';
;

export interface FILE_ITEM {
  title: string;
  level: number;
  url: string;
  status: StatusType;
  completedDate?: string;
  lastUpdate?: string;
  note?: string;
}

export interface FILE_LIST_TYPE {
  category: string;
  list: FILE_ITEM[];
}

export const FILE_LIST_DATA: FILE_LIST_TYPE[] = [
  {
    category: 'COMMON',
    list: [
      {
        title: 'form',
        level: 1,
        url: '/index.html',
        status: 'Planned',
      }
    ]
  }
]

export default function PublishFiles (){
  return (
    <div className="publishFiles-container">
      <h1 className="title">Publish Files</h1>

      {FILE_LIST_DATA.map((cate, idx) => (
        <section className="publishFiles-wrapper" key={idx}>
          <h2 className="publishFiles-title">{cate.category}</h2>

          <table className="publishFiles-table">
            <colgroup>
              <col className="c_1" />
              <col className="c_2" />
              <col className="c_3" />
              <col className="c_4" />
              <col className="c_5" />
              <col className="c_6" />
            </colgroup>

            <thead>
              <tr>
                <th>Title</th>
                <th>URL</th>
                <th>Status</th>
                <th>Completed Date</th>
                <th>Last Update</th>
                <th>Note</th>
              </tr>
            </thead>

            <tbody>
              {cate.list.map((item, idx) => (
              <tr 
                key={idx} 
                data-status={item.status}
              >
                <th 
                  className={`title level_${item.level}`}
                >
                  {item.title}
                </th>
                <td>
                  <Link to={item.url}>{item.url}</Link>
                </td>
                <td className="item-status">
                  {item.status}
                </td>
                <td>{item.completedDate}</td>
                <td>{item.lastUpdate}</td>
                <td>{item.note}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </div>
  )
}