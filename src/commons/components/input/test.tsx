import React from 'react';
import { Input } from './index';

export default function InputTest() {
  return (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <h1>인풋 컴포넌트 테스트</h1>

      <div>
        <h2>라이트 테마</h2>
        <h3>Primary</h3>
        <div style={{ marginBottom: '10px' }}>
          <Input size='small' placeholder='Small 인풋' />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Input size='medium' placeholder='Medium 인풋' />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Input size='large' placeholder='Large 인풋' />
        </div>

        <h3>Secondary</h3>
        <div style={{ marginBottom: '10px' }}>
          <Input variant='secondary' size='small' placeholder='Small 인풋' />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Input variant='secondary' size='medium' placeholder='Medium 인풋' />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Input variant='secondary' size='large' placeholder='Large 인풋' />
        </div>

        <h3>Tertiary</h3>
        <div style={{ marginBottom: '10px' }}>
          <Input variant='tertiary' size='small' placeholder='Small 인풋' />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Input variant='tertiary' size='medium' placeholder='Medium 인풋' />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Input variant='tertiary' size='large' placeholder='Large 인풋' />
        </div>
      </div>

      <div style={{ backgroundColor: '#333', padding: '20px' }}>
        <h2 style={{ color: 'white' }}>다크 테마</h2>
        <h3 style={{ color: 'white' }}>Primary</h3>
        <div style={{ marginBottom: '10px' }}>
          <Input theme='dark' size='small' placeholder='Small 인풋' />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Input theme='dark' size='medium' placeholder='Medium 인풋' />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Input theme='dark' size='large' placeholder='Large 인풋' />
        </div>

        <h3 style={{ color: 'white' }}>Secondary</h3>
        <div style={{ marginBottom: '10px' }}>
          <Input
            theme='dark'
            variant='secondary'
            size='small'
            placeholder='Small 인풋'
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Input
            theme='dark'
            variant='secondary'
            size='medium'
            placeholder='Medium 인풋'
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Input
            theme='dark'
            variant='secondary'
            size='large'
            placeholder='Large 인풋'
          />
        </div>

        <h3 style={{ color: 'white' }}>Tertiary</h3>
        <div style={{ marginBottom: '10px' }}>
          <Input
            theme='dark'
            variant='tertiary'
            size='small'
            placeholder='Small 인풋'
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Input
            theme='dark'
            variant='tertiary'
            size='medium'
            placeholder='Medium 인풋'
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Input
            theme='dark'
            variant='tertiary'
            size='large'
            placeholder='Large 인풋'
          />
        </div>
      </div>

      <div>
        <h2>비활성화 상태</h2>
        <div style={{ marginBottom: '10px' }}>
          <Input disabled placeholder='비활성화된 인풋' />
        </div>
      </div>
    </div>
  );
}
