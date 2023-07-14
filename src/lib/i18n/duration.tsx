import dayjs, { Dayjs } from 'dayjs';
import { FunctionComponent } from 'react';
import { T } from './translate';

export type DurationProps = {
  start: Dayjs;
  end: Dayjs;
};

export const Duration: FunctionComponent<DurationProps> = ({ start, end }) => {
  const diff = dayjs.duration(end.diff(start)).add(2, 'months');
  const years = diff.years();
  const months = diff.months() % 12;

  return (
    <>
      {years ? (
        years > 1 ? (
          <T en={`${years} years`} fr={`${years} ans`} />
        ) : (
          <T en={`${years} year`} fr={`${years} an`} />
        )
      ) : null}

      {years && months ? ' ' : ''}

      {months ? (
        months > 1 ? (
          <T en={`${months} months`} fr={`${months} mois`} />
        ) : (
          <T en={`${months} month`} fr={`${months} mois`} />
        )
      ) : null}
    </>
  );
};
