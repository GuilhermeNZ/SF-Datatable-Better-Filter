import { LightningElement } from 'lwc';

export default class NzDatatableTest extends LightningElement {
    tableColumns = [
        { label: 'Label', fieldName: 'name' },
        { label: 'Website', fieldName: 'website', type: 'url' },
        { label: 'Phone', fieldName: 'phone', type: 'phone' },
        { label: 'Balance', fieldName: 'amount', type: 'currency' },
        { label: 'CloseAt', fieldName: 'closeAt', type: 'date' }
    ];
    data = [
        { id: '1', name: 'Acme', website: 'www.acme.com', phone: '1234567890', amount: 1000, closeAt: '2024-12-31' },
        { id: '2', name: 'Globex', website: 'www.globex.com', phone: '0987654321', amount: 2000, closeAt: '2024-11-30' },
        { id: '3', name: 'Soylent', website: 'www.soylent.com', phone: '5555555555', amount: 1500, closeAt: '2024-10-15' }
    ]

}