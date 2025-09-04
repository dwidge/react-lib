import React from "react";
import styled from "styled-components";
import { Fill } from "./Flex";

export function Aspect({
  a = 1,
  children,
}: React.PropsWithChildren<{ a?: number }>) {
  return (
    <Outer a={a}>
      <Inner>{children}</Inner>
    </Outer>
  );
}

const Outer = styled.div<{ a: number }>`
  flex: auto;
  position: relative;
  width: 100%;
  padding-top: ${({ a = 1 }) => (100 / a) | 0}%;
`;
const Inner = styled(Fill)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
