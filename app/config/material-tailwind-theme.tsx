"use client"

// ThemeProvider.tsx (클라이언트 컴포넌트)
"use client"; // 클라이언트 전용 컴포넌트 선언

import { ThemeProvider } from "@material-tailwind/react";

export default function ClientThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}


// 기본적으로 Layout.tsx는 서버 컴포넌트
//근데 material tailwind는 클라이언트 컴포넌트라 설정을 해줘야함
