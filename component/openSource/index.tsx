import { PropsWithChildren } from 'react';
import { Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IOpenSource } from './IOpenSource';
import OpenSourceRow from './row';
import { CommonSection } from '../common/CommonSection';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { EmptyRowCol } from '../common';

type Payload = IOpenSource.Payload;

export const OpenSource = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="OPEN SOURCE">
      {payload?.description && createNoticeArea(payload.description)}
      <OpenSourceRow payload={payload} />
    </CommonSection>
  );
}

function createNoticeArea(description: Payload['description']) {
  return (
    <EmptyRowCol>
      <Alert color="secondary" role="alert" className="mt-3">
        {description?.icon ? <FontAwesomeIcon className="mr-2" icon={description.icon} /> : ''}
        {description?.link && (
          <a href={description.link} target="_blank" rel="noopener noreferrer">
            {description?.linkTitle || description.link}
          </a>
        )}
      </Alert>
    </EmptyRowCol>
  );
}
