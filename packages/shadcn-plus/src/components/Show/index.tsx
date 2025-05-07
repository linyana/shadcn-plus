import { IShowType } from './types';

export const Show = ({
  hideWhen,
  children,
  condition,
  strictComparison = false,
}: IShowType) => {
  const shouldHide = strictComparison
    ? condition === hideWhen
    : condition == hideWhen;

  return shouldHide ? null : children;
};
