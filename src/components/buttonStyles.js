import styled from 'styled-components';
import { Button } from '@mui/material';

export const PrimaryButton = styled(Button)`
  && {
    background-color: var(--color-primary);
    color: white;
    padding: 10px 24px;
    border-radius: 8px;
    text-transform: none;
    font-weight: 500;
    letter-spacing: 0.5px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    
    &:hover {
      background-color: var(--color-primary-dark);
      box-shadow: 0 4px 8px rgba(0,0,0,0.15);
      transform: translateY(-1px);
    }
    
    &:active {
      transform: translateY(0);
    }
  }
`;

export const SecondaryButton = styled(Button)`
  && {
    background-color: var(--color-secondary);
    color: white;
    padding: 10px 24px;
    border-radius: 8px;
    text-transform: none;
    font-weight: 500;
    letter-spacing: 0.5px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    
    &:hover {
      background-color: var(--color-secondary-light);
      box-shadow: 0 4px 8px rgba(0,0,0,0.15);
      transform: translateY(-1px);
    }
  }
`;

export const OutlinedButton = styled(Button)`
  && {
    border: 2px solid var(--color-primary);
    color: var(--color-primary);
    background-color: transparent;
    padding: 8px 22px;
    border-radius: 8px;
    text-transform: none;
    font-weight: 500;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: rgba(103, 58, 183, 0.04);
      border-color: var(--color-primary-dark);
    }
  }
`;

export const TextButton = styled(Button)`
  && {
    color: var(--color-primary);
    padding: 8px 16px;
    text-transform: none;
    font-weight: 500;
    transition: all 0.2s ease;
    
    &:hover {
      background-color: rgba(103, 58, 183, 0.08);
    }
  }
`;
