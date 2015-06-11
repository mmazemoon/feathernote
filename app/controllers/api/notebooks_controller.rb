module Api
  class NotebooksController < ApiController
    def create
      @notebook = Notebook.new(notebook_params)
      if @notebook.save
        render json: @notebook
      else
        render json: @notebook.errors.full_messages, status: :unprocessable_entity
      end
    end

    def show
      @notebook = Notebook.find(params[:id])
      render json: @notebook
    end

    def update
      @notebook = Notebook.find(params[:id])
    end

    def destroy
    end

    def index
      @notebooks = current_user.notebooks
      render json: @notebooks
    end

    private
    def notebook_params
      params.require(:notebook).permit(:name)
    end
  end
end
