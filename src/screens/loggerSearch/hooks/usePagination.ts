import { ILogger } from '@allTypes/logger.types';
import { useCallback, useEffect, useState } from 'react';

interface ILoggerProps {
  loggerItems: ILogger['result']['auditLog'] | undefined;
}

export default function usePagination({ loggerItems }: ILoggerProps) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState<
    ILogger['result']['auditLog'] | null | undefined
  >(null);
  const [pageCount, setPageCount] = useState<number>(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  //   Item Per Page
  const itemsPerPage = 10;

  const setPagination = useCallback(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    if (loggerItems) {
      setCurrentItems(loggerItems?.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(loggerItems?.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, loggerItems]);

  const sortByLogId = () => {
    const endOffset = itemOffset + itemsPerPage;
    let newItems = loggerItems?.sort(function (a, b) {
      return a.logId - b.logId;
    });
    setCurrentItems(newItems?.slice(itemOffset, endOffset));
  };

  const sortByAppType = () => {
    const endOffset = itemOffset + itemsPerPage;
    let newItems = loggerItems?.sort(function (a, b) {
      let va = a.applicationType === null ? '' : '' + a.applicationType;
      let vb = b.applicationType === null ? '' : '' + b.applicationType;

      return va > vb ? 1 : va === vb ? 0 : -1;
    });

    setCurrentItems(newItems?.slice(itemOffset, endOffset));
  };
  const sortByAppId = () => {
    const endOffset = itemOffset + itemsPerPage;
    let newItems = loggerItems?.sort(function (a, b) {
      return a.applicationId - b.applicationId;
    });

    setCurrentItems(newItems?.slice(itemOffset, endOffset));
  };
  const sortByAction = () => {
    const endOffset = itemOffset + itemsPerPage;
    let newItems = loggerItems?.sort(function (a, b) {
      return a.actionType.localeCompare(b.actionType);
    });
    console.log(newItems);
    setCurrentItems(newItems?.slice(itemOffset, endOffset));
  };
  const sortByDate = () => {
    const endOffset = itemOffset + itemsPerPage;
    let newItems = loggerItems?.sort(function (a, b) {
      return (
        new Date(a.creationTimestamp).valueOf() -
        new Date(b.creationTimestamp).valueOf()
      );
    });

    setCurrentItems(newItems?.slice(itemOffset, endOffset));
  };

  useEffect(() => {
    setPagination();
  }, [setPagination]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    if (loggerItems) {
      const newOffset = (event.selected * itemsPerPage) % loggerItems?.length;
      setItemOffset(newOffset);
    }
  };

  return {
    currentItems,
    pageCount,
    handlePageClick,
    sortByLogId,
    sortByAppType,
    sortByAppId,
    sortByAction,
    sortByDate,
  };
}
