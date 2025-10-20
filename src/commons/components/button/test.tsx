import React from 'react';
import Button from './index';

/**
 * 버튼 컴포넌트 테스트
 */
const ButtonTest = () => {
  return (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <div>
        <h2>Primary 버튼</h2>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <Button size='small' variant='primary'>
            Small
          </Button>
          <Button size='medium' variant='primary'>
            Medium
          </Button>
          <Button size='large' variant='primary'>
            Large
          </Button>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button size='medium' variant='primary' disabled>
            Disabled
          </Button>
        </div>
      </div>

      <div>
        <h2>Secondary 버튼</h2>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <Button size='small' variant='secondary'>
            Small
          </Button>
          <Button size='medium' variant='secondary'>
            Medium
          </Button>
          <Button size='large' variant='secondary'>
            Large
          </Button>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button size='medium' variant='secondary' disabled>
            Disabled
          </Button>
        </div>
      </div>

      <div>
        <h2>Tertiary 버튼</h2>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <Button size='small' variant='tertiary'>
            Small
          </Button>
          <Button size='medium' variant='tertiary'>
            Medium
          </Button>
          <Button size='large' variant='tertiary'>
            Large
          </Button>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button size='medium' variant='tertiary' disabled>
            Disabled
          </Button>
        </div>
      </div>

      <div style={{ padding: '20px', backgroundColor: '#1c1c1c' }}>
        <h2 style={{ color: 'white' }}>다크 테마 버튼</h2>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <Button size='medium' variant='primary' theme='dark'>
            Primary
          </Button>
          <Button size='medium' variant='secondary' theme='dark'>
            Secondary
          </Button>
          <Button size='medium' variant='tertiary' theme='dark'>
            Tertiary
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonTest;
