export interface IAdvice {
  slip: {
    id: number;
    advice: string;
  };
}

export interface IProps {
  advice: IAdvice;
}
