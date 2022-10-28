import { ILogger } from '@allTypes/logger.types';

interface IItemsProps {
  currentItems: ILogger['result']['auditLog'] | null | undefined;
}

export default function TableItems({ currentItems }: IItemsProps) {
  return (
    <>
      {currentItems?.map((item) => {
        return (
          <tr key={item.logId}>
            <td>{item.logId}</td>
            <td>{item.applicationType}</td>
            <td>{item.applicationId}</td>
            <td>{item.actionType}</td>
            {/* {item.actionDetails ? item.actionDetails : '-/-'} */}
            <td>-/-</td>
            <td>{item.creationTimestamp}</td>
          </tr>
        );
      })}
    </>
  );
}
