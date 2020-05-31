import { BaseResponse} from './base-response.model';
import { PagingOption } from './paging-option.model';
export interface PagingResponse<T> extends BaseResponse<T[]> {
    paginatedResponse: PagingOption
}
