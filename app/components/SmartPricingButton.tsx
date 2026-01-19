// app/components/SmartPricingButton.tsx
"use client";

import React from "react";

// ID Extension của bạn (Lấy từ link store bạn cung cấp) , sau này đổi lại khi lên production
const EXTENSION_ID = "jhfnnidflahoofgpgefhbbojbjbhhhcj";
const STORE_URL = `https://chromewebstore.google.com/detail/nohkfpabhnpjiijhgmaecbnnkdphahkh?utm_source=item-share-cb`;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const SmartPricingButton = ({
  children,
  className,
  ...props
}: Props) => {
  const handleClick = () => {
    // 1. Kiểm tra môi trường có phải Chrome/Chromium Desktop không
    const isChrome =
      typeof window !== "undefined" &&
      (window as any).chrome &&
      (window as any).chrome.runtime;

    if (isChrome) {
      // 2. Thử gửi tin nhắn vào Extension
      console.log("Attempting to connect to extension:", EXTENSION_ID);

      try {
        (window as any).chrome.runtime.sendMessage(
          EXTENSION_ID,
          { action: "OPEN_UPGRADE_FLOW" },
          (response: any) => {
            // Kiểm tra lỗi (nếu extension chưa cài hoặc bị tắt, lastError sẽ xuất hiện)
            const lastError = (window as any).chrome.runtime.lastError;

            if (lastError || !response?.success) {
              console.log("Extension not found or error:", lastError);
              // CASE B: Chưa cài -> Mở Chrome Store
              window.open(STORE_URL, "_blank");
            } else {
              // CASE A: Đã cài -> Extension đã tự mở tab -> Web không cần làm gì thêm
              console.log("Extension detected & opened.");
            }
          },
        );
      } catch (e) {
        // Fallback an toàn nếu hàm sendMessage bị lỗi
        window.open(STORE_URL, "_blank");
      }
    } else {
      // 3. Không phải Chrome (Mobile, Safari...) -> Mở link Store
      window.open(STORE_URL, "_blank");
    }
  };

  return (
    <button onClick={handleClick} className={className} {...props}>
      {children}
    </button>
  );
};
