import { styled } from 'styled-components'
import { colors } from '../../styles'

type InputGroupProps = {
  Width?: string
}

export const Success = styled.div`
  padding: 8px;
  padding-top: 16px;
  h2,
  p {
    color: ${colors.beige};
  }

  h2 {
    font-size: 16px;
    font-weight: bold;
  }

  p {
    margin: 16px 0;
    font-size: 14px;
    font-weight: normal;
    line-height: 22px;
  }
`

export const Form = styled.form`
  padding: 8px;
  display: flex;
  flex-wrap: wrap;

  .double {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  h2 {
    color: ${colors.beige};
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  .buttons {
    margin-top: 32px;

    .back {
      margin-top: 8px;
    }
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: none;
  margin-top: 12px;
  width: ${(props) => props.Width || '344px'};

  label {
    color: ${colors.beige};
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 12px;
    display: block;
  }

  input {
    color: ${colors.black};
    font-size: 14px;
    font-weight: bold;
    background-color: ${colors.beige};
    border: 1px solid ${colors.beige};
    height: 32px;
    padding: 0 8px;
    width: ${(props) => props.Width || '344px'};

    &.error {
      border: 1px solid red;
    }
  }
`
