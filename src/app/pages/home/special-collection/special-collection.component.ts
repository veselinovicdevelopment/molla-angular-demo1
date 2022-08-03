import { Component, OnInit, Input } from '@angular/core';

import { specialSlider } from '../data';

@Component({
	selector: 'molla-special-collection',
	templateUrl: './special-collection.component.html',
	styleUrls: ['./special-collection.component.scss']
})

export class SpecialCollectionComponent implements OnInit {

	@Input() products = [];
	@Input() loaded = false;

	sliderOption = specialSlider;
	attrs = ['featured', 'sale', 'rated'];
	titles = { "featured": "Featured", "sale": "On Sale", "rated": "Top Rated" };

	constructor() { }

	ngOnInit(): void {
	}
}
