/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var noop = require( '@stdlib/utils-noop' );
var groupIn = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof groupIn, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			groupIn( value, noop );
		};
	}
});

tape( 'the function throws an error if not provided an indicator function (no options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var obj = {
				'a': 1,
				'b': 2,
				'c': 3
			};
			groupIn( obj, value );
		};
	}
});

tape( 'the function throws an error if not provided an indicator function (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var obj = {
				'a': 1,
				'b': 2,
				'c': 3
			};
			groupIn( obj, {}, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid options argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {},
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var obj = {
				'a': 1,
				'b': 2,
				'c': 3
			};
			groupIn( obj, value, noop );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {},
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts;
			var obj;

			obj = {
				'a': 1,
				'b': 2,
				'c': 3
			};
			opts = {
				'returns': value
			};
			groupIn( obj, opts, noop );
		};
	}
});

tape( 'the function groups object values according to an indicator function', function test( t ) {
	var expected;
	var out;
	var obj;

	function indicator( v ) {
		return v[ 0 ];
	}

	obj = Object.create( null );
	obj.a = 'beep';
	obj.b = 'boop';
	obj.c = 'foo';
	obj.d = 'bar';

	expected = {
		'b': [ 'beep', 'boop', 'bar' ],
		'f': [ 'foo' ]
	};
	out = groupIn( obj, indicator );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out.b.sort();
	out.f.sort();
	expected.b.sort();
	expected.f.sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function groups object values according to an indicator function (inherited)', function test( t ) {
	var expected;
	var out;
	var obj;

	function indicator( v ) {
		return v[ 0 ];
	}

	function Foo() {
		this.a = 'beep';
		this.b = 'boop';
		this.c = 'foo';
		this.d = 'bar';
		return this;
	}

	Foo.prototype.e = 'bip';
	Foo.prototype.f = 'fu';

	obj = new Foo();

	expected = {
		'b': [ 'beep', 'boop', 'bar', 'bip' ],
		'f': [ 'foo', 'fu' ]
	};
	out = groupIn( obj, indicator );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out.b.sort();
	out.f.sort();
	expected.b.sort();
	expected.f.sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function groups object values according to an indicator function (values)', function test( t ) {
	var expected;
	var opts;
	var out;
	var obj;

	function indicator( v ) {
		return v[ 0 ];
	}

	obj = Object.create( null );
	obj.a = 'beep';
	obj.b = 'boop';
	obj.c = 'foo';
	obj.d = 'bar';

	opts = {
		'returns': 'values'
	};

	expected = {
		'b': [ 'beep', 'boop', 'bar' ],
		'f': [ 'foo' ]
	};
	out = groupIn( obj, opts, indicator );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out.b.sort();
	out.f.sort();
	expected.b.sort();
	expected.f.sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function groups values according to an indicator function (values; inherited)', function test( t ) {
	var expected;
	var opts;
	var out;
	var obj;

	function indicator( v ) {
		return v[ 0 ];
	}

	function Foo() {
		this.a = 'beep';
		this.b = 'boop';
		this.c = 'foo';
		this.d = 'bar';
		return this;
	}

	Foo.prototype.e = 'bip';
	Foo.prototype.f = 'fu';

	obj = new Foo();

	opts = {
		'returns': 'values'
	};

	expected = {
		'b': [ 'beep', 'boop', 'bar', 'bip' ],
		'f': [ 'foo', 'fu' ]
	};
	out = groupIn( obj, opts, indicator );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out.b.sort();
	out.f.sort();
	expected.b.sort();
	expected.f.sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function groups values according to an indicator function (keys)', function test( t ) {
	var expected;
	var opts;
	var out;
	var obj;

	function indicator( v ) {
		return v[ 0 ];
	}

	obj = Object.create( null );
	obj.a = 'beep';
	obj.b = 'boop';
	obj.c = 'foo';
	obj.d = 'bar';

	opts = {
		'returns': 'keys'
	};

	expected = {
		'b': [ 'a', 'b', 'd' ],
		'f': [ 'c' ]
	};
	out = groupIn( obj, opts, indicator );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out.b.sort();
	out.f.sort();
	expected.b.sort();
	expected.f.sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function groups values according to an indicator function (keys; inherited)', function test( t ) {
	var expected;
	var opts;
	var out;
	var obj;

	function indicator( v ) {
		return v[ 0 ];
	}

	function Foo() {
		this.a = 'beep';
		this.b = 'boop';
		this.c = 'foo';
		this.d = 'bar';
		return this;
	}

	Foo.prototype.e = 'bip';
	Foo.prototype.f = 'fu';

	obj = new Foo();

	opts = {
		'returns': 'keys'
	};

	expected = {
		'b': [ 'a', 'b', 'd', 'e' ],
		'f': [ 'c', 'f' ]
	};
	out = groupIn( obj, opts, indicator );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out.b.sort();
	out.f.sort();
	expected.b.sort();
	expected.f.sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function groups values according to an indicator function (pairs)', function test( t ) {
	var expected;
	var opts;
	var out;
	var obj;

	function indicator( v ) {
		return v[ 0 ];
	}

	obj = Object.create( null );
	obj.a = 'beep';
	obj.b = 'boop';
	obj.c = 'foo';
	obj.d = 'bar';

	opts = {
		'returns': '*'
	};

	expected = {
		'b': [ [ 'a', 'beep' ], [ 'b', 'boop' ], [ 'd', 'bar' ] ],
		'f': [ [ 'c', 'foo' ] ]
	};
	out = groupIn( obj, opts, indicator );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out.b.sort( sort );
	out.f.sort( sort );
	expected.b.sort( sort );
	expected.f.sort( sort );

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();

	function sort( a, b ) {
		return a[ 0 ] < b[ 0 ];
	}
});

tape( 'the function groups values according to an indicator function (pairs; inherited)', function test( t ) {
	var expected;
	var opts;
	var out;
	var obj;

	function indicator( v ) {
		return v[ 0 ];
	}

	function Foo() {
		this.a = 'beep';
		this.b = 'boop';
		this.c = 'foo';
		this.d = 'bar';
		return this;
	}

	Foo.prototype.e = 'bip';
	Foo.prototype.f = 'fu';

	obj = new Foo();

	opts = {
		'returns': '*'
	};

	expected = {
		'b': [ [ 'a', 'beep' ], [ 'b', 'boop' ], [ 'd', 'bar' ], [ 'e', 'bip' ] ],
		'f': [ [ 'c', 'foo' ], [ 'f', 'fu' ] ]
	};
	out = groupIn( obj, opts, indicator );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out.b.sort( sort );
	out.f.sort( sort );
	expected.b.sort( sort );
	expected.f.sort( sort );

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();

	function sort( a, b ) {
		return a[ 0 ] < b[ 0 ];
	}
});

tape( 'the function groups values according to an indicator function (array-like object)', function test( t ) {
	var expected;
	var opts;
	var out;
	var arr;

	function indicator( v ) {
		if ( typeof v === 'string' ) {
			return v[ 0 ];
		}
		return 'other';
	}

	arr = Object.create( null );
	arr.length = 4;
	arr[ 0 ] = 'beep';
	arr[ 1 ] = 'boop';
	arr[ 2 ] = 'foo';
	arr[ 3 ] = 'bar';

	opts = {
		'returns': 'values'
	};

	// Note: `length` is an own property and thus is included in key iteration.
	expected = {
		'b': [ 'beep', 'boop', 'bar' ],
		'f': [ 'foo' ],
		'other': [ 4 ]
	};
	out = groupIn( arr, opts, indicator );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out.b.sort();
	out.f.sort();
	out.other.sort();
	expected.b.sort();
	expected.f.sort();
	expected.other.sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function supports providing an execution context', function test( t ) {
	var expected;
	var opts;
	var ctx;
	var out;
	var obj;

	function indicator( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return v[ 0 ];
	}

	ctx = {
		'count': 0
	};

	obj = Object.create( null );
	obj.a = 'beep';
	obj.b = 'boop';
	obj.c = 'foo';
	obj.d = 'bar';

	opts = {
		'thisArg': ctx
	};
	expected = {
		'b': [ 'beep', 'boop', 'bar' ],
		'f': [ 'foo' ]
	};
	out = groupIn( obj, opts, indicator );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out.b.sort();
	out.f.sort();
	expected.b.sort();
	expected.f.sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.strictEqual( ctx.count, 4, 'updates context' );

	t.end();
});

tape( 'the function invokes the indicator function with both the object value and the object key', function test( t ) {
	var expected;
	var out;
	var obj;

	function indicator( v, k ) {
		k = parseInt( k, 10 );
		if ( k < 2 ) {
			return 'low';
		}
		return 'high';
	}

	obj = Object.create( null );
	obj[ 0 ] = 'beep';
	obj[ 1 ] = 'boop';
	obj[ 2 ] = 'foo';
	obj[ 3 ] = 'bar';

	expected = {
		'low': [ 'beep', 'boop' ],
		'high': [ 'foo', 'bar' ]
	};
	out = groupIn( obj, indicator );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out.high.sort();
	out.low.sort();
	expected.high.sort();
	expected.low.sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'if provided an empty object, the function returns an empty object', function test( t ) {
	var expected;
	var out;
	var obj;

	function indicator( v ) {
		return v[ 0 ];
	}

	obj = Object.create( null );
	expected = {};

	out = groupIn( obj, indicator );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'if provided an empty object, the function returns an empty object (values)', function test( t ) {
	var expected;
	var opts;
	var out;
	var obj;

	function indicator( v ) {
		return v[ 0 ];
	}

	obj = Object.create( null );
	expected = {};

	opts = {
		'returns': 'values'
	};

	out = groupIn( obj, opts, indicator );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'if provided an empty object, the function returns an empty object (keys)', function test( t ) {
	var expected;
	var opts;
	var out;
	var obj;

	function indicator( v ) {
		return v[ 0 ];
	}

	obj = Object.create( null );
	expected = {};

	opts = {
		'returns': 'keys'
	};

	out = groupIn( obj, opts, indicator );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'if provided an empty object, the function returns an empty object (pairs)', function test( t ) {
	var expected;
	var opts;
	var out;
	var obj;

	function indicator( v ) {
		return v[ 0 ];
	}

	obj = Object.create( null );
	expected = {};

	opts = {
		'returns': '*'
	};

	out = groupIn( obj, opts, indicator );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'the function does not account for dynamic addition and removal of object properties', function test( t ) {
	var expected;
	var out;
	var obj;

	function indicator( v, k ) {
		obj[ 'a'+k ] = 'boop';
		return v[ 0 ];
	}

	obj = Object.create( null );
	obj.a = 'beep';
	obj.b = 'boop';
	obj.c = 'foo';
	obj.d = 'bar';

	expected = {
		'b': [ 'beep', 'boop', 'bar' ],
		'f': [ 'foo' ]
	};
	out = groupIn( obj, indicator );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out.b.sort();
	out.f.sort();
	expected.b.sort();
	expected.f.sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function groups values according to an indicator function (string serialization)', function test( t ) {
	var expected;
	var out;
	var obj;

	function indicator() {
		return {};
	}

	obj = Object.create( null );
	obj.a = 'beep';
	obj.b = 'boop';
	obj.c = 'foo';
	obj.d = 'bar';

	expected = {
		'[object Object]': [ 'beep', 'boop', 'foo', 'bar' ]
	};
	out = groupIn( obj, indicator );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out[ '[object Object]' ].sort();
	expected[ '[object Object]' ].sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function groups values according to an indicator function (string serialization)', function test( t ) {
	var expected;
	var out;
	var obj;

	function indicator() {}

	obj = Object.create( null );
	obj.a = 'beep';
	obj.b = 'boop';
	obj.c = 'foo';
	obj.d = 'bar';

	expected = {
		'undefined': [ 'beep', 'boop', 'foo', 'bar' ]
	};
	out = groupIn( obj, indicator );

	// To ensure stable comparison due to iteration order instability, we only want to test that the sets are the same, not the order...
	out.undefined.sort();
	expected.undefined.sort();

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});
