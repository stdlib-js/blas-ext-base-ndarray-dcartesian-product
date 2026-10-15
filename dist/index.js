/** @license Apache-2.0 */

'use strict';

/**
* Compute the Cartesian product for two one-dimensional double-precision floating-point ndarrays.
*
* @module @stdlib/blas-ext-base-ndarray-dcartesian-product
*
* @example
* var Float64Vector = require( '@stdlib/ndarray-vector-float64' );
* var zeros = require( '@stdlib/ndarray-zeros' );
* var dcartesianProduct = require( '@stdlib/blas-ext-base-ndarray-dcartesian-product' );
*
* var x = new Float64Vector( [ 1.0, 2.0 ] );
* var y = new Float64Vector( [ 3.0, 4.0 ] );
* var out = zeros( [ 4, 2 ], {
*     'dtype': 'float64'
* });
*
* var v = dcartesianProduct( [ x, y, out ] );
* // returns <ndarray>[ [ 1.0, 3.0 ], [ 1.0, 4.0 ], [ 2.0, 3.0 ], [ 2.0, 4.0 ] ]
*
* var bool = ( v === out );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
