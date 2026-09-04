/**
 * EJERCICIO 17 - Sistema de pagos
 * ---------------------------------------------------------------------------
 * `procesarPago` no debe saber qué tipo concreto de MetodoPago está
 * utilizando: solo le importa que cumpla la interface.
 */
export interface MetodoPago {
    pagar(monto: number): void;
}

export class TarjetaCredito implements MetodoPago {
    pagar(monto: number): void {
      console.log(`Pagado ${monto}$ con tarjeta`);
        // TODO: informar el pago por consola (console.log), mencionando el
        // monto. Cada método de pago debe loguear un mensaje distinto que
        // lo identifique (por ejemplo, mencionando "tarjeta").
    }
}

export class Transferencia implements MetodoPago {
    pagar(monto: number): void {
        console.log(`Pagado ${monto} $ con transferencia`);
    }
}

export class MercadoPago implements MetodoPago {
    pagar(monto: number): void {
       console.log(`Pagado ${monto} $ con MercadoPago`);
    }
}

export class Efectivo implements MetodoPago {
    pagar(monto: number): void {
        console.log(`Pagado ${monto} $ con efectivo`);
        
    }
}

export function procesarPago(metodo: MetodoPago, monto: number): void {
    metodo.pagar(monto);
}
