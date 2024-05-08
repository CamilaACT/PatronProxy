/**
 * Digitalthinking Shool
 * Digitalthinking Shool API reference for developers, teh error handler is implement using   The IETF devised RFC 7807 effor, which creates a generalized error-handling schema. https://tools.ietf.org/html/rfc7807
 *
 * OpenAPI spec version: 1.0
 * Contact: https://digitalthinking.biz/es/udemy
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * This model represent a Invoice data that user receive when make a request method
 */
export interface InvoiceRequest { 
    amount: number;
    /**
     * Unique Id of customer taht represent the owner of invoice
     */
    customer: number;
    detail?: string;
    /**
     * Bussines number that identified a invoice
     */
    number: string;
}