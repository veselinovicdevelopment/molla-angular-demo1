import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'molla-top-collection',
	templateUrl: './top-collection.component.html',
	styleUrls: ['./top-collection.component.scss']
})

export class TopCollectionComponent implements OnInit {

	@Input() products = [];
	@Input() loaded = false;

	categories = [['all'], ['furniture'], ['decoration'], ['lighting']];
	titles = { "all": "All", "furniture": "Furniture", "decoration": "Decor", "lighting": "Lighting" };

	constructor() { }

	ngOnInit(): void {
	}
}
