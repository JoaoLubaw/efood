import { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'

import { PurchasePayload, usePurchaseMutation } from '../../services/api'

import * as S from './styles'

import { RootReducer } from '../../store'
import { clear } from '../../store/Reducers/cart'

import { getTotalPrice, parseToBrl } from '../../utils'

type Props = {
  Backbutton: () => void
  ConcludeButton: () => void
}

const Checkout = ({ Backbutton, ConcludeButton }: Props) => {
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const [delivery, setDelivery] = useState(true)

  const [deliveryInfo, setDeliveryInfo] = useState({
    receiver: '',
    description: '',
    city: '',
    zipCode: '',
    number: 0,
    complement: ''
  })

  const totalPrice = getTotalPrice(items)

  const form = useFormik({
    initialValues: {
      fullname: '',
      adress: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      CardDisplayName: '',
      CardNumber: '',
      ExpiresMonth: '',
      ExpiresYear: '',
      CardCode: ''
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .min(5, 'O nome precisa ter ao menos 5 caracteres')
        .required('O campo é obrigatório'),
      adress: Yup.string()
        .min(5, 'Endereço inválido')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'Cidade inválida')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'Este não parece um CEP válido')
        .max(9, 'Este não parece um CEP válido')
        .required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string()
        .min(4, 'Este não parece um número válido')
        .max(4, 'Este não parece um número válido'),

      CardDisplayName: Yup.string().required('O campo é obrigatório'),
      CardNumber: Yup.string()
        .min(19, 'Insira um cartão válido')
        .max(19, 'Insira um cartão válido')
        .required('O campo é obrigatório'),
      ExpiresMonth: Yup.string()
        .required('O campo é obrigatório')
        .min(2, 'Insira um mês válido')
        .max(2, 'Insira um mês válido'),
      ExpiresYear: Yup.string()
        .required('O campo é obrigatório')
        .min(4, 'Insira um ano válido')
        .max(4, 'Insira um ano válido'),
      CardCode: Yup.string()
        .required('O campo é obrigatório')
        .min(3, 'Insira um cartão válido')
        .max(3, 'Insira um código válido')
    }),
    onSubmit: (values) => {
      const combinedData: PurchasePayload = {
        delivery: {
          receiver: deliveryInfo.receiver,
          adress: {
            description: deliveryInfo.description,
            city: deliveryInfo.city
          },
          zipCode: deliveryInfo.zipCode,
          number: deliveryInfo.number,
          complement: deliveryInfo.complement
        },
        payment: {
          card: {
            name: values.CardDisplayName,
            number: values.CardNumber,
            code: values.CardCode,
            expires: {
              month: values.ExpiresMonth,
              year: values.ExpiresYear
            }
          }
        },
        products: items.map((item) => ({
          id: Number(item.id),
          preco: Number(item.preco)
        }))
      } as unknown as PurchasePayload

      purchase(combinedData)
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid
    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [dispatch, isSuccess])

  if (isSuccess && data)
    return (
      <S.Success>
        <h2>Pedido realizado - {data?.orderId} </h2>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>

        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>

        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>

        <button className="continue" onClick={() => ConcludeButton()}>
          Concluir
        </button>
      </S.Success>
    )

  return (
    <S.Form>
      {delivery ? (
        <>
          <h2>Entrega</h2>
          <S.InputGroup>
            <label htmlFor="fullname">Nome completo</label>
            <input
              id="fullname"
              type="text"
              name="fullname"
              value={form.values.fullname}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('fullname') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="adress">Endereço</label>
            <input
              id="adress"
              type="text"
              name="adress"
              value={form.values.adress}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('adress') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="city">Cidade</label>
            <input
              id="city"
              type="text"
              name="city"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('city') ? 'error' : ''}
            />
          </S.InputGroup>

          <div className="double">
            <S.InputGroup Width="155px">
              <label htmlFor="cep">CEP</label>
              <InputMask
                id="cep"
                type="text"
                name="cep"
                value={form.values.cep}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cep') ? 'error' : ''}
                mask="99999-999"
              />
            </S.InputGroup>
            <S.InputGroup Width="155px">
              <label htmlFor="number">Número</label>
              <input
                id="number"
                type="text"
                name="number"
                value={form.values.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('number') ? 'error' : ''}
              />
            </S.InputGroup>
          </div>

          <S.InputGroup>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              id="complement"
              type="text"
              name="complement"
              value={form.values.complement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('complement') ? 'error' : ''}
            />
          </S.InputGroup>

          <div className="buttons">
            <button
              type="submit"
              className="continue"
              disabled={
                !(
                  form.values.fullname &&
                  form.values.adress &&
                  form.values.city &&
                  form.values.cep &&
                  form.values.number
                )
              }
              onClick={() => {
                setDeliveryInfo({
                  receiver: form.values.fullname,
                  description: form.values.adress,
                  city: form.values.city,
                  zipCode: form.values.cep,
                  number: Number(form.values.number),
                  complement: form.values.complement
                })
                setDelivery(false)
              }}
              title="Clique aqui para preencher os dados de pagamento"
            >
              Continuar com o pagamento
            </button>
            <button
              className="back"
              onClick={Backbutton}
              title="Clique aqui para voltar ao carrinho"
            >
              Voltar ao carrinho
            </button>
          </div>
        </>
      ) : (
        <>
          <h2>Pagamento - Valor total a pagar: {parseToBrl(totalPrice)} </h2>
          <S.InputGroup>
            <label htmlFor="CardDisplayName">Nome impresso no cartão</label>
            <input
              id="CardDisplayName"
              type="text"
              name="CardDisplayName"
              value={form.values.CardDisplayName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('CardDisplayName') ? 'error' : ''}
            />
          </S.InputGroup>
          <div className="double">
            <S.InputGroup Width="228px">
              <label htmlFor="CardNumber">Numero do cartão</label>
              <InputMask
                id="CardNumber"
                type="text"
                name="CardNumber"
                value={form.values.CardNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('CardNumber') ? 'error' : ''}
                mask="9999 9999 9999 9999"
              />
            </S.InputGroup>

            <S.InputGroup Width="88px">
              <label htmlFor="CardCode">CVV</label>
              <InputMask
                id="CardCode"
                type="text"
                name="CardCode"
                value={form.values.CardCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('CardCode') ? 'error' : ''}
                mask="999"
              />
            </S.InputGroup>
          </div>
          <div className="double">
            <S.InputGroup Width="155px">
              <label htmlFor="ExpiresMonth">Mês de vencimento</label>
              <InputMask
                id="ExpiresMonth"
                type="text"
                name="ExpiresMonth"
                value={form.values.ExpiresMonth}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('ExpiresMonth') ? 'error' : ''}
                mask="99"
              />
            </S.InputGroup>

            <S.InputGroup Width="155px">
              <label htmlFor="ExpiresYear">Ano de vencimento</label>
              <InputMask
                id="ExpiresYear"
                type="text"
                name="ExpiresYear"
                value={form.values.ExpiresYear}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('ExpiresYear') ? 'error' : ''}
                mask="9999"
              />
            </S.InputGroup>
          </div>
          <div className="buttons">
            <button
              className="continue"
              type="submit"
              title="Clique aqui para finalizar a compra"
              onClick={(e) => {
                e.preventDefault()
                form.submitForm()
              }}
              disabled={isLoading}
            >
              {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
            </button>
            <button
              className="back"
              title="Clique aqui voltar ao campo de entrega"
              onClick={() => setDelivery(true)}
            >
              Voltar à entrega
            </button>
          </div>
        </>
      )}
    </S.Form>
  )
}

export default Checkout
