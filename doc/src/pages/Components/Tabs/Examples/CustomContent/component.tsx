import { Tabs, Button, Input, Flex } from 'shadcn-plus';
import { User, Settings, Bell } from 'lucide-react';

export const CustomContentTabsComponent = () => {
  return (
    <Tabs
      items={[
        {
          label: (
            <Flex gap="8px" alignItems="center">
              <User size={16} />
              个人资料
            </Flex>
          ),
          content: (
            <div style={{ padding: '16px 0' }}>
              <h4 style={{ marginBottom: '16px', fontWeight: '600' }}>个人信息</h4>
              <Flex flexDirection="column" gap="12px">
                <div>
                  <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>姓名</label>
                  <Input placeholder="请输入您的姓名" />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>邮箱</label>
                  <Input placeholder="请输入您的邮箱" type="email" />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>简介</label>
                  <textarea 
                    style={{ 
                      width: '100%', 
                      padding: '8px', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '6px', 
                      resize: 'none',
                      minHeight: '80px'
                    }}
                    placeholder="请输入您的简介"
                  />
                </div>
                <Button size="sm" style={{ alignSelf: 'flex-start' }}>保存更改</Button>
              </Flex>
            </div>
          ),
        },
        {
          label: (
            <Flex gap="8px" alignItems="center">
              <Settings size={16} />
              设置
            </Flex>
          ),
          content: (
            <div style={{ padding: '16px 0' }}>
              <h4 style={{ marginBottom: '16px', fontWeight: '600' }}>偏好设置</h4>
              <Flex flexDirection="column" gap="16px">
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input type="checkbox" defaultChecked />
                    启用深色模式
                  </label>
                </div>
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input type="checkbox" />
                    自动保存
                  </label>
                </div>
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input type="checkbox" defaultChecked />
                    显示提示
                  </label>
                </div>
                <Button size="sm" style={{ alignSelf: 'flex-start' }}>应用设置</Button>
              </Flex>
            </div>
          ),
        },
        {
          label: (
            <Flex gap="8px" alignItems="center">
              <Bell size={16} />
              通知
            </Flex>
          ),
          content: (
            <div style={{ padding: '16px 0' }}>
              <h4 style={{ marginBottom: '16px', fontWeight: '600' }}>通知设置</h4>
              <Flex flexDirection="column" gap="16px">
                <div>
                  <h5 style={{ marginBottom: '8px', fontWeight: '500' }}>邮件通知</h5>
                  <Flex flexDirection="column" gap="8px">
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <input type="checkbox" defaultChecked />
                      新消息提醒
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <input type="checkbox" />
                      系统更新
                    </label>
                  </Flex>
                </div>
                <div>
                  <h5 style={{ marginBottom: '8px', fontWeight: '500' }}>推送通知</h5>
                  <Flex flexDirection="column" gap="8px">
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <input type="checkbox" defaultChecked />
                      桌面通知
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <input type="checkbox" defaultChecked />
                      声音提醒
                    </label>
                  </Flex>
                </div>
                <Button size="sm" style={{ alignSelf: 'flex-start' }}>保存通知设置</Button>
              </Flex>
            </div>
          ),
        },
      ]}
    />
  );
};