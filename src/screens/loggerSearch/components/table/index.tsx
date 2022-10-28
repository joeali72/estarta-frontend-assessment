import dynamic from 'next/dynamic';
import { Table, Container } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import type { ILogger, TLogger } from '@allTypes/logger.types';
import usePagination from '@screens/loggerSearch/hooks/usePagination';
import { ArrowUpIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
const TableItems = dynamic(() => import('../items'));
const SearchForm = dynamic(() => import('../search'));

export interface ILoggerProps {
  logger: TLogger | undefined;
}

export default function LoggerTable({ logger }: ILoggerProps) {
  const [loggerItems, setLoggerItems] = useState<
    ILogger['result']['auditLog'] | undefined
  >(undefined);

  const loggerI = logger?.result?.auditLog;

  useEffect(() => {
    setLoggerItems(logger?.result?.auditLog);
  }, [logger]);
  const {
    currentItems,
    pageCount,
    handlePageClick,
    sortByLogId,
    sortByAppType,
    sortByAppId,
    sortByAction,
    sortByDate,
  } = usePagination({
    loggerItems,
  });

  return (
    <section>
      <Container>
        <SearchForm logger={loggerI} setLogger={setLoggerItems} />
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th onClick={sortByLogId}>
                Log ID
                <ArrowUpIcon
                  style={{ width: '1.25rem', marginInlineStart: '.25rem' }}
                />
              </th>
              <th onClick={sortByAppType}>
                Application Type{' '}
                <ArrowUpIcon
                  style={{ width: '1.25rem', marginInlineStart: '.25rem' }}
                />
              </th>
              <th onClick={sortByAppId}>
                Application ID{' '}
                <ArrowUpIcon
                  style={{ width: '1.25rem', marginInlineStart: '.25rem' }}
                />
              </th>
              <th onClick={sortByAction}>
                Action{' '}
                <ArrowUpIcon
                  style={{ width: '1.25rem', marginInlineStart: '.25rem' }}
                />
              </th>
              <th>
                Action Details{' '}
                <ArrowUpIcon
                  style={{ width: '1.25rem', marginInlineStart: '.25rem' }}
                />
              </th>
              <th onClick={sortByDate}>
                Date : Time{' '}
                <ArrowUpIcon
                  style={{ width: '1.25rem', marginInlineStart: '.25rem' }}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <TableItems currentItems={currentItems} />
          </tbody>
        </Table>

        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          previousLabel="Previous"
          onPageChange={handlePageClick}
          containerClassName="pagination_container"
          pageLinkClassName="pagination_page"
          activeLinkClassName="pagination_page__active"
          previousLinkClassName="pagination_previous"
          nextLinkClassName="pagination_next"
          pageCount={pageCount}
        />
      </Container>
    </section>
  );
}
