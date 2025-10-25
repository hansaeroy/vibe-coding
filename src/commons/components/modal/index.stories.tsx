import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./index";

const meta: Meta<typeof Modal> = {
  title: "Commons/Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "다양한 상황에서 사용할 수 있는 모달 컴포넌트입니다. 정보 전달, 확인, 경고 등 다양한 용도로 활용할 수 있습니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["info", "danger"],
      description: "모달의 변형 타입을 설정합니다.",
      defaultValue: "info",
    },
    actions: {
      control: { type: "select" },
      options: ["single", "dual"],
      description: "액션 버튼의 개수를 설정합니다.",
      defaultValue: "single",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "모달의 크기를 설정합니다.",
      defaultValue: "medium",
    },
    theme: {
      control: { type: "select" },
      options: ["light", "dark"],
      description: "모달의 테마를 설정합니다.",
      defaultValue: "light",
    },
    title: {
      control: { type: "text" },
      description: "모달의 제목을 설정합니다.",
    },
    description: {
      control: { type: "text" },
      description: "모달의 설명을 설정합니다.",
    },
    confirmText: {
      control: { type: "text" },
      description: "확인 버튼의 텍스트를 설정합니다.",
      defaultValue: "확인",
    },
    cancelText: {
      control: { type: "text" },
      description: "취소 버튼의 텍스트를 설정합니다.",
      defaultValue: "취소",
    },
    disabled: {
      control: { type: "boolean" },
      description: "모달의 비활성화 상태를 설정합니다.",
      defaultValue: false,
    },
    onConfirm: {
      action: "confirmed",
      description: "확인 버튼 클릭 시 실행되는 함수입니다.",
    },
    onCancel: {
      action: "cancelled",
      description: "취소 버튼 클릭 시 실행되는 함수입니다.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 모달 (정보 전달용)
export const Default: Story = {
  args: {
    title: "알림",
    description: "작업이 완료되었습니다.",
    onConfirm: () => console.log("확인 클릭"),
  },
};

// 위험한 작업 확인 모달
export const Danger: Story = {
  args: {
    variant: "danger",
    title: "정말 삭제하시겠습니까?",
    description: "이 작업은 되돌릴 수 없습니다.",
    actions: "dual",
    confirmText: "삭제",
    cancelText: "취소",
    onConfirm: () => console.log("삭제 확인"),
    onCancel: () => console.log("삭제 취소"),
  },
};

// 작은 크기 모달
export const Small: Story = {
  args: {
    size: "small",
    title: "간단한 알림",
    description: "작은 모달입니다.",
    onConfirm: () => console.log("확인 클릭"),
  },
};

// 큰 크기 모달
export const Large: Story = {
  args: {
    size: "large",
    title: "상세한 정보",
    description:
      "이 모달은 더 많은 정보를 표시할 수 있는 큰 크기의 모달입니다. 긴 텍스트나 여러 요소를 포함할 때 유용합니다.",
    onConfirm: () => console.log("확인 클릭"),
  },
};

// 라이트 테마 모달
export const LightTheme: Story = {
  args: {
    theme: "light",
    title: "라이트 모드",
    description: "라이트 테마로 표시되는 모달입니다.",
    onConfirm: () => console.log("확인 클릭"),
  },
  parameters: {
    backgrounds: { default: "light" },
  },
};

// 다크 테마 모달
export const DarkTheme: Story = {
  args: {
    theme: "dark",
    title: "다크 모드",
    description: "다크 테마로 표시되는 모달입니다.",
    onConfirm: () => console.log("확인 클릭"),
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

// 비활성화된 모달
export const Disabled: Story = {
  args: {
    title: "비활성화된 모달",
    description: "이 모달은 비활성화 상태입니다.",
    disabled: true,
    onConfirm: () => console.log("확인 클릭"),
  },
};

// 커스텀 버튼 텍스트
export const CustomButtons: Story = {
  args: {
    title: "커스텀 버튼",
    description: "버튼 텍스트를 사용자 정의할 수 있습니다.",
    actions: "dual",
    confirmText: "저장",
    cancelText: "닫기",
    onConfirm: () => console.log("저장 클릭"),
    onCancel: () => console.log("닫기 클릭"),
  },
};

// 긴 텍스트 모달
export const LongText: Story = {
  args: {
    title: "긴 제목이 포함된 모달입니다",
    description:
      "이것은 매우 긴 설명 텍스트가 포함된 모달입니다. 여러 줄에 걸쳐 표시되며, 사용자에게 상세한 정보를 제공합니다. 모달의 크기와 레이아웃이 어떻게 조정되는지 확인할 수 있습니다.",
    onConfirm: () => console.log("확인 클릭"),
  },
};

// 모든 Variant 조합 보기
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Modal
        title="정보 모달"
        description="기본 정보 모달입니다."
        onConfirm={() => console.log("정보 확인")}
      />
      <Modal
        variant="danger"
        title="위험 모달"
        description="위험한 작업을 확인합니다."
        actions="dual"
        confirmText="삭제"
        cancelText="취소"
        onConfirm={() => console.log("삭제 확인")}
        onCancel={() => console.log("삭제 취소")}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "모든 모달 variant를 한 번에 볼 수 있습니다.",
      },
    },
  },
};

// 모든 Size 조합 보기
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Modal
        size="small"
        title="작은 모달"
        description="작은 크기입니다."
        onConfirm={() => console.log("작은 모달 확인")}
      />
      <Modal
        size="medium"
        title="중간 모달"
        description="중간 크기입니다."
        onConfirm={() => console.log("중간 모달 확인")}
      />
      <Modal
        size="large"
        title="큰 모달"
        description="큰 크기의 모달입니다."
        onConfirm={() => console.log("큰 모달 확인")}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "모든 모달 크기를 한 번에 볼 수 있습니다.",
      },
    },
  },
};

// 라이트 테마 전체 조합
export const LightThemeShowcase: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h3
          style={{ marginBottom: "16px", fontSize: "16px", fontWeight: "600" }}
        >
          정보 모달
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Modal
            variant="info"
            size="small"
            theme="light"
            title="Small 정보 모달"
            description="작은 크기의 정보 모달입니다."
            onConfirm={() => console.log("Small 정보 확인")}
          />
          <Modal
            variant="info"
            size="medium"
            theme="light"
            title="Medium 정보 모달"
            description="중간 크기의 정보 모달입니다."
            onConfirm={() => console.log("Medium 정보 확인")}
          />
          <Modal
            variant="info"
            size="large"
            theme="light"
            title="Large 정보 모달"
            description="큰 크기의 정보 모달입니다."
            onConfirm={() => console.log("Large 정보 확인")}
          />
        </div>
      </div>
      <div>
        <h3
          style={{ marginBottom: "16px", fontSize: "16px", fontWeight: "600" }}
        >
          위험 모달
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Modal
            variant="danger"
            size="small"
            theme="light"
            title="Small 위험 모달"
            description="작은 크기의 위험 모달입니다."
            actions="dual"
            confirmText="삭제"
            cancelText="취소"
            onConfirm={() => console.log("Small 삭제 확인")}
            onCancel={() => console.log("Small 삭제 취소")}
          />
          <Modal
            variant="danger"
            size="medium"
            theme="light"
            title="Medium 위험 모달"
            description="중간 크기의 위험 모달입니다."
            actions="dual"
            confirmText="삭제"
            cancelText="취소"
            onConfirm={() => console.log("Medium 삭제 확인")}
            onCancel={() => console.log("Medium 삭제 취소")}
          />
          <Modal
            variant="danger"
            size="large"
            theme="light"
            title="Large 위험 모달"
            description="큰 크기의 위험 모달입니다."
            actions="dual"
            confirmText="삭제"
            cancelText="취소"
            onConfirm={() => console.log("Large 삭제 확인")}
            onCancel={() => console.log("Large 삭제 취소")}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: "light" },
    docs: {
      description: {
        story: "라이트 테마에서 모든 모달 조합을 보여줍니다.",
      },
    },
  },
};

// 다크 테마 전체 조합
export const DarkThemeShowcase: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h3
          style={{
            marginBottom: "16px",
            fontSize: "16px",
            fontWeight: "600",
            color: "#ffffff",
          }}
        >
          정보 모달
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Modal
            variant="info"
            size="small"
            theme="dark"
            title="Small 정보 모달"
            description="작은 크기의 정보 모달입니다."
            onConfirm={() => console.log("Small 정보 확인")}
          />
          <Modal
            variant="info"
            size="medium"
            theme="dark"
            title="Medium 정보 모달"
            description="중간 크기의 정보 모달입니다."
            onConfirm={() => console.log("Medium 정보 확인")}
          />
          <Modal
            variant="info"
            size="large"
            theme="dark"
            title="Large 정보 모달"
            description="큰 크기의 정보 모달입니다."
            onConfirm={() => console.log("Large 정보 확인")}
          />
        </div>
      </div>
      <div>
        <h3
          style={{
            marginBottom: "16px",
            fontSize: "16px",
            fontWeight: "600",
            color: "#ffffff",
          }}
        >
          위험 모달
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Modal
            variant="danger"
            size="small"
            theme="dark"
            title="Small 위험 모달"
            description="작은 크기의 위험 모달입니다."
            actions="dual"
            confirmText="삭제"
            cancelText="취소"
            onConfirm={() => console.log("Small 삭제 확인")}
            onCancel={() => console.log("Small 삭제 취소")}
          />
          <Modal
            variant="danger"
            size="medium"
            theme="dark"
            title="Medium 위험 모달"
            description="중간 크기의 위험 모달입니다."
            actions="dual"
            confirmText="삭제"
            cancelText="취소"
            onConfirm={() => console.log("Medium 삭제 확인")}
            onCancel={() => console.log("Medium 삭제 취소")}
          />
          <Modal
            variant="danger"
            size="large"
            theme="dark"
            title="Large 위험 모달"
            description="큰 크기의 위험 모달입니다."
            actions="dual"
            confirmText="삭제"
            cancelText="취소"
            onConfirm={() => console.log("Large 삭제 확인")}
            onCancel={() => console.log("Large 삭제 취소")}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: "dark" },
    docs: {
      description: {
        story: "다크 테마에서 모든 모달 조합을 보여줍니다.",
      },
    },
  },
};
